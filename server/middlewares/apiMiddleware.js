// apiKeyMiddleware.js
const API_KEY = process.env.API_KEY;

const apiMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(400).json({ message: 'API key is required' });
  }

  if (apiKey !== API_KEY) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  next();
};

module.exports = apiMiddleware;
