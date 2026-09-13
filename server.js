const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Log all incoming requests
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  if (req.method === 'POST' && req.url === '/api/gemini') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      console.log(`[${new Date().toISOString()}] Forwarding query to Gemini API...`);
      
      const options = {
        hostname: 'generativelanguage.googleapis.com',
        port: 443,
        path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      };

      const proxyReq = https.request(options, (proxyRes) => {
        let resData = '';
        proxyRes.on('data', chunk => { resData += chunk; });
        proxyRes.on('end', () => {
          console.log(`[${new Date().toISOString()}] Gemini responded with status ${proxyRes.statusCode}`);
          if (proxyRes.statusCode !== 200) {
            console.error("Gemini Error Body:", resData);
          }
          res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
          res.end(resData);
        });
      });

      proxyReq.on('error', (err) => {
        console.error(`[${new Date().toISOString()}] Gemini Proxy Error:`, err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      });

      proxyReq.write(body);
      proxyReq.end();
    });
    return;
  }

  // Serve static files
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // Clean query strings/hash parameters from file path
  const questionMarkIdx = filePath.indexOf('?');
  if (questionMarkIdx !== -1) {
    filePath = filePath.substring(0, questionMarkIdx);
  }
  
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
