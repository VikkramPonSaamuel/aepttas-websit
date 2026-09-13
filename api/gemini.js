const https = require('https');

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is not configured in Vercel settings.' });
  }

  try {
    const bodyData = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(bodyData)
      }
    };

    const proxyReq = https.request(options, (proxyRes) => {
      let resData = '';
      proxyRes.on('data', chunk => { resData += chunk; });
      proxyRes.on('end', () => {
        res.status(proxyRes.statusCode).setHeader('Content-Type', 'application/json').send(resData);
      });
    });

    proxyReq.on('error', (err) => {
      res.status(500).json({ error: err.message });
    });

    proxyReq.write(bodyData);
    proxyReq.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
