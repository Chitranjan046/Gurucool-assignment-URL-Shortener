const mongoose = require('mongoose');

const shortenedUrlSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ShortenedUrl', shortenedUrlSchema);
