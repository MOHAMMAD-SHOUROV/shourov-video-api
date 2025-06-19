const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ error: "❌ Please provide a Facebook video URL" });

  try {
    // Dummy API response (change it to real API later)
    return res.json({ status: "success", download: `https://example.com/video.mp4`, requested_url: url });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
