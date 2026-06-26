// Builds a layered SelfCoder-Logo.psd (Schild + Schriftzug as separate layers)
// from the transparent PNG assets. Run: node Logo/make-logo-psd.cjs
const fs = require("fs");
const path = require("path");
const { PNG } = require("pngjs");
const { writePsd } = require("ag-psd");

const root = path.join(__dirname, "..");
const pub = path.join(root, "public");

function loadPng(file) {
  const png = PNG.sync.read(fs.readFileSync(path.join(pub, file)));
  return { width: png.width, height: png.height, data: new Uint8ClampedArray(png.data) };
}

// Alpha-over composite of a layer onto the merged canvas.
function over(canvas, cw, ch, layer, ox, oy) {
  for (let y = 0; y < layer.height; y++) {
    for (let x = 0; x < layer.width; x++) {
      const dx = ox + x;
      const dy = oy + y;
      if (dx < 0 || dy < 0 || dx >= cw || dy >= ch) continue;
      const si = (y * layer.width + x) * 4;
      const sa = layer.data[si + 3] / 255;
      if (sa === 0) continue;
      const di = (dy * cw + dx) * 4;
      const da = canvas[di + 3] / 255;
      const outA = sa + da * (1 - sa);
      for (let c = 0; c < 3; c++) {
        canvas[di + c] = Math.round((layer.data[si + c] * sa + canvas[di + c] * da * (1 - sa)) / (outA || 1));
      }
      canvas[di + 3] = Math.round(outA * 255);
    }
  }
}

const shield = loadPng("shield.png");
const wordmark = loadPng("wordmark.png");

// Canvas reproduces the original stacked logo proportions.
const W = 2304;
const H = 1760;
const shieldX = Math.round((W - shield.width) / 2);
const shieldY = 70;
const wordX = Math.round((W - wordmark.width) / 2);
const wordY = shieldY + shield.height + 70;

const merged = new Uint8ClampedArray(W * H * 4);
over(merged, W, H, shield, shieldX, shieldY);
over(merged, W, H, wordmark, wordX, wordY);

const psd = {
  width: W,
  height: H,
  imageData: { width: W, height: H, data: merged },
  children: [
    {
      name: "SelfCoder Logo",
      opened: true,
      children: [
        {
          name: "Schriftzug",
          left: wordX,
          top: wordY,
          right: wordX + wordmark.width,
          bottom: wordY + wordmark.height,
          imageData: wordmark,
        },
        {
          name: "Schild",
          left: shieldX,
          top: shieldY,
          right: shieldX + shield.width,
          bottom: shieldY + shield.height,
          imageData: shield,
        },
      ],
    },
  ],
};

const out = path.join(__dirname, "SelfCoder-Logo.psd");
const buffer = writePsd(psd, { generateThumbnail: false });
fs.writeFileSync(out, Buffer.from(buffer));
console.log("Wrote", out, Math.round(buffer.byteLength / 1024) + " KB", `${W}x${H}`);
