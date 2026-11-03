import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3000;
const DIR = path.resolve('.');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary',
  '.ktx2': 'image/ktx2',
  '.mp3': 'audio/mpeg',
  '.webm': 'audio/webm'
};

// 1x1 transparent PNG fallback for missing icons/decals
const TRANSPARENT_PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
const EMPTY_JSON = Buffer.from('{}', 'utf8');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  
  // Normalization
  if (reqPath.startsWith('/play/')) reqPath = reqPath.slice(5);
  if (reqPath === '/play') reqPath = '/';
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  let filePath = path.join(DIR, decodeURIComponent(reqPath));

  // Fallbacks for atlas/surfaces aliases
  if (!fs.existsSync(filePath)) {
    if (reqPath.startsWith('/textures/atlas/')) {
      const alt = path.join(DIR, 'textures', path.basename(reqPath));
      if (fs.existsSync(alt)) filePath = alt;
    } else if (reqPath.startsWith('/textures/surfaces/')) {
      const alt = path.join(DIR, 'textures', path.basename(reqPath));
      if (fs.existsSync(alt)) filePath = alt;
    } else if (reqPath.startsWith('/models/props/')) {
      const alt = path.join(DIR, 'models', path.basename(reqPath));
      if (fs.existsSync(alt)) filePath = alt;
    } else if (reqPath.includes('basis_transcoder.wasm')) {
      const alt = path.join(DIR, 'assets', 'basis_transcoder-VXdx5NbI.wasm');
      if (fs.existsSync(alt)) filePath = alt;
    } else if (reqPath.startsWith('/audio/')) {
      const alt = path.join(DIR, 'audio', path.basename(reqPath));
      if (fs.existsSync(alt)) filePath = alt;
    }
  }

  // Handle missing non-critical assets gracefully
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    const ext = path.extname(reqPath).toLowerCase();
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (ext === '.webp' || ext === '.png' || ext === '.jpg') {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(TRANSPARENT_PNG);
      return;
    }
    if (ext === '.json') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(EMPTY_JSON);
      return;
    }
    console.warn('[404]', reqPath, '->', filePath);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + reqPath);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const stat = fs.statSync(filePath);
  const total = stat.size;

  // Support HTTP Range requests (crucial for Audio streaming / Seeking)
  const range = req.headers.range;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Accept-Ranges', 'bytes');

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : total - 1;
    const chunksize = (end - start) + 1;

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Content-Length': chunksize,
      'Content-Type': contentType
    });
    fs.createReadStream(filePath, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': total,
      'Content-Type': contentType
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Benglooru standalone game running locally at: http://localhost:${PORT}/`);
  console.log(`Sandboxes:`);
  console.log(` - Sandbox: http://localhost:${PORT}/?view=sandbox`);
  console.log(` - Vehicles: http://localhost:${PORT}/?view=vehicles`);
  console.log(` - City Map: http://localhost:${PORT}/?view=city`);
  console.log(` - Life/NPC: http://localhost:${PORT}/?view=life`);
});
