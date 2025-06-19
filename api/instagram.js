const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const url = req.query.url;
  if (!url || !url.includes("instagram.com")) {
    return res.status(400).json({ error: "❌ Please provide a valid Instagram video URL" });
  }

  try {
    // Dummy response — real Instagram scraping/API needed here
    return res.json({
      status: "success",
      download: "https://example.com/instagram_video.mp4",
      requested_url: url
    });
  } catch (err) {
    return res.status(500).json({ error: "❌ Internal Server Error" });
  }
});

module.exports = router;
