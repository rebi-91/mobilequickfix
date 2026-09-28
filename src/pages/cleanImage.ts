/* ------------------------------------------------------------------
   Removes the white background from a picture in the browser,
   so the image files themselves never need editing.

   'photo' (phone pictures): only white that touches the edge of the
           picture is removed, so white phones keep their white body.
   'logo'  (brand logos): all white is removed, and black or grey
           lettering is turned light so it shows on the dark page.
           Coloured logos (Samsung blue, Huawei red...) keep their colour.

   Results are cached, so each picture is only processed once.
------------------------------------------------------------------- */
export type CleanMode = 'photo' | 'logo';

const MAX_SIZE = 480; /* pictures are shrunk to this before processing (keeps it fast) */
const cache = new Map<string, Promise<string>>();

export function cleanImage(src: string, mode: CleanMode): Promise<string> {
  const key = `${mode}:${src}`;
  let job = cache.get(key);
  if (!job) {
    job = process(src, mode).catch(() => src); /* on any problem, use the original picture */
    cache.set(key, job);
  }
  return job;
}

async function process(src: string, mode: CleanMode): Promise<string> {
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
  await img.decode();

  const scale = Math.min(1, MAX_SIZE / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return src;
  ctx.drawImage(img, 0, 0, w, h);

  const data = ctx.getImageData(0, 0, w, h);
  const px = data.data;

  /* 0 = pure white, 255 = far from white */
  const distFromWhite = (i: number) => 255 - Math.min(px[i], px[i + 1], px[i + 2]);

  /* Turn a nearly-white pixel semi-transparent, and take the white out of
     its colour so there is no pale halo around the edges */
  const soften = (i: number, clear: number, solid: number) => {
    const d = distFromWhite(i);
    if (d >= solid) return;
    if (d <= clear) { px[i + 3] = 0; return; }
    const a = (d - clear) / (solid - clear);
    for (let c = 0; c < 3; c++) {
      px[i + c] = Math.max(0, Math.min(255, Math.round((px[i + c] - (1 - a) * 255) / a)));
    }
    px[i + 3] = Math.round(px[i + 3] * a);
  };

  if (mode === 'photo') {
    /* Flood-fill the white background inwards from the picture's edges */
    const CLEAR = 22;
    const isBg = new Uint8Array(w * h);
    const stack: number[] = [];
    const tryAdd = (p: number) => {
      if (!isBg[p] && distFromWhite(p * 4) <= CLEAR) { isBg[p] = 1; stack.push(p); }
    };
    for (let x = 0; x < w; x++) { tryAdd(x); tryAdd((h - 1) * w + x); }
    for (let y = 0; y < h; y++) { tryAdd(y * w); tryAdd(y * w + w - 1); }
    while (stack.length) {
      const p = stack.pop()!;
      const x = p % w;
      if (x > 0) tryAdd(p - 1);
      if (x < w - 1) tryAdd(p + 1);
      if (p >= w) tryAdd(p - w);
      if (p < w * (h - 1)) tryAdd(p + w);
    }
    for (let p = 0; p < w * h; p++) {
      const i = p * 4;
      if (isBg[p]) { px[i + 3] = 0; continue; }
      /* smooth the outline where the phone meets the removed background */
      const x = p % w;
      const touchesBg =
        (x > 0 && isBg[p - 1]) || (x < w - 1 && isBg[p + 1]) ||
        (p >= w && isBg[p - w]) || (p < w * (h - 1) && isBg[p + w]);
      if (touchesBg) soften(i, CLEAR, 70);
    }
  } else {
    for (let i = 0; i < px.length; i += 4) {
      soften(i, 14, 70);
      if (px[i + 3] === 0) continue;
      /* Black/grey parts become light; coloured parts stay as they are */
      const r = px[i], g = px[i + 1], b = px[i + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const sat = max === 0 ? 0 : (max - min) / max;
      const neutral = Math.max(0, Math.min(1, (0.35 - sat) / 0.15));
      if (neutral > 0) {
        px[i] = Math.round(r + (236 - r) * neutral);
        px[i + 1] = Math.round(g + (238 - g) * neutral);
        px[i + 2] = Math.round(b + (246 - b) * neutral);
      }
    }
  }

  ctx.putImageData(data, 0, 0);
  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png'));
  return blob ? URL.createObjectURL(blob) : src;
}
