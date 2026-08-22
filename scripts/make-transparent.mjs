import fs from 'fs';
import zlib from 'zlib';

// Simple PNG decoder and encoder to make white/near-white background transparent
const buf = fs.readFileSync('/Users/4star/Desktop/sk upgraded site/public/assets/logo-raw.png');

// Find IHDR chunk
let pos = 8; // skip PNG signature
let width = 0;
let height = 0;
let bitDepth = 0;
let colorType = 0;

const idatChunks = [];

while (pos < buf.length) {
  const length = buf.readUInt32BE(pos);
  const type = buf.slice(pos + 4, pos + 8).toString('ascii');
  const data = buf.slice(pos + 8, pos + 8 + length);
  
  if (type === 'IHDR') {
    width = data.readUInt32BE(0);
    height = data.readUInt32BE(4);
    bitDepth = data[8];
    colorType = data[9];
    console.log(`Image: ${width}x${height}, bitDepth: ${bitDepth}, colorType: ${colorType}`);
  } else if (type === 'IDAT') {
    idatChunks.push(data);
  }
  
  pos += 12 + length;
}

const allIdat = Buffer.concat(idatChunks);
const decompressed = zlib.inflateSync(allIdat);

// De-filter and process pixels to RGBA with alpha transparency for near-white
// colorType 2 = RGB (3 bytes/pixel), colorType 6 = RGBA (4 bytes/pixel)
const bytesPerPixel = colorType === 6 ? 4 : 3;
const stride = 1 + width * bytesPerPixel;
const outStride = 1 + width * 4; // We will output RGBA
const outBuffer = Buffer.alloc(height * outStride);

// Let's reconstruct uncompressed raw scanlines
const rawScanlines = Buffer.alloc(height * width * bytesPerPixel);

for (let y = 0; y < height; y++) {
  const filter = decompressed[y * stride];
  const scanline = decompressed.slice(y * stride + 1, (y + 1) * stride);
  const prevLine = y > 0 ? rawScanlines.slice((y - 1) * width * bytesPerPixel, y * width * bytesPerPixel) : null;
  const currentLine = rawScanlines.slice(y * width * bytesPerPixel, (y + 1) * width * bytesPerPixel);

  for (let x = 0; x < width * bytesPerPixel; x++) {
    const raw = scanline[x];
    const a = x >= bytesPerPixel ? currentLine[x - bytesPerPixel] : 0;
    const b = prevLine ? prevLine[x] : 0;
    const c = (x >= bytesPerPixel && prevLine) ? prevLine[x - bytesPerPixel] : 0;

    let val = 0;
    if (filter === 0) { // None
      val = raw;
    } else if (filter === 1) { // Sub
      val = (raw + a) & 0xff;
    } else if (filter === 2) { // Up
      val = (raw + b) & 0xff;
    } else if (filter === 3) { // Average
      val = (raw + Math.floor((a + b) / 2)) & 0xff;
    } else if (filter === 4) { // Paeth
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr;
      if (pa <= pb && pa <= pc) pr = a;
      else if (pb <= pc) pr = b;
      else pr = c;
      val = (raw + pr) & 0xff;
    }
    currentLine[x] = val;
  }
}

// Now write out unfiltered RGBA lines (filter = 0) with background transparency calculation
// Also crop or remove the bottom right "Rawalpindi | Pakistan" text if near bottom edge or make it clean
for (let y = 0; y < height; y++) {
  outBuffer[y * outStride] = 0; // Filter 0 (None)
  const lineStart = y * outStride + 1;
  const rawLineStart = y * width * bytesPerPixel;

  for (let x = 0; x < width; x++) {
    const r = rawScanlines[rawLineStart + x * bytesPerPixel];
    const g = rawScanlines[rawLineStart + x * bytesPerPixel + 1];
    const b = rawScanlines[rawLineStart + x * bytesPerPixel + 2];

    // Remove text watermark in bottom right corner (y > height * 0.92 and x > width * 0.65)
    let isWatermarkArea = (y > height * 0.92 && x > width * 0.65);

    // Calculate background brightness and distance from white
    // White background is around r > 240, g > 240, b > 240
    let alpha = 255;
    if (isWatermarkArea) {
      alpha = 0;
    } else {
      // Calculate how close it is to white
      const minChannel = Math.min(r, g, b);
      const maxChannel = Math.max(r, g, b);
      const avg = (r + g + b) / 3;
      const saturation = maxChannel - minChannel;

      if (avg >= 248 && saturation < 8) {
        alpha = 0;
      } else if (avg >= 230 && saturation < 15) {
        // Smooth transition for soft edges / drop shadows
        alpha = Math.round(255 * (1 - (avg - 230) / (248 - 230)));
      } else if (avg >= 210 && saturation < 10) {
        alpha = Math.round(255 * (1 - (avg - 210) / 40 * 0.6));
      }
    }

    outBuffer[lineStart + x * 4] = r;
    outBuffer[lineStart + x * 4 + 1] = g;
    outBuffer[lineStart + x * 4 + 2] = b;
    outBuffer[lineStart + x * 4 + 3] = alpha;
  }
}

// Re-encode PNG
const compressed = zlib.deflateSync(outBuffer);

// Helper for CRC32
function makeCrcTable() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  return table;
}
const crcTable = makeCrcTable();
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([len, typeAndData, crcBuf]);
}

// Build new IHDR with colorType 6 (RGBA)
const newIhdrData = Buffer.alloc(13);
newIhdrData.writeUInt32BE(width, 0);
newIhdrData.writeUInt32BE(height, 4);
newIhdrData[8] = 8; // bit depth
newIhdrData[9] = 6; // color type RGBA
newIhdrData[10] = 0; // compression
newIhdrData[11] = 0; // filter
newIhdrData[12] = 0; // interlace

const pngSig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdrChunk = createChunk('IHDR', newIhdrData);
const idatChunk = createChunk('IDAT', compressed);
const iendChunk = createChunk('IEND', Buffer.alloc(0));

const finalPng = Buffer.concat([pngSig, ihdrChunk, idatChunk, iendChunk]);
fs.writeFileSync('/Users/4star/Desktop/sk upgraded site/public/assets/logo.png', finalPng);
console.log('Successfully created transparent logo.png:', finalPng.length, 'bytes');
