const ShortenedUrl = require('../models/ShortenedUrl');
const shortid = require('shortid');

const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  
  try {
    if (!originalUrl) {
      return res.status(400).json({ error: 'Please provide a valid URL' });
    }

    // Check if the URL already exists in the database
    const existingUrl = await ShortenedUrl.findOne({ originalUrl });
    if (existingUrl) {
      return res.json({ originalUrl, shortUrl: existingUrl.shortId });
    }

    // Create a unique short ID using shortid package
    const shortId = shortid.generate();

    // Save the new URL mapping to the database
    const newUrl = new ShortenedUrl({ originalUrl, shortId });
    await newUrl.save();

    res.json({ originalUrl, shortUrl: shortId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const redirectToOriginalUrl = async (req, res) => {
  const shortId = req.params.shortId;
  
  try {
    // Find the original URL by short ID
    const urlMapping = await ShortenedUrl.findOne({ shortId });

    if (!urlMapping) {
      return res.status(404).json({ error: 'URL not found' });
    }

    // Redirect to the original URL
    res.redirect(urlMapping.originalUrl);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { shortenUrl, redirectToOriginalUrl };
