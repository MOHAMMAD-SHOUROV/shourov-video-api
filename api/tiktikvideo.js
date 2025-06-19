const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ error: "❌ Please provide a TikTok video URL" });

  try {
    const response = await axios.get(`https://api.tikwm.com/api?url=${encodeURIComponent(url)}&hd=1`);
    const data = response.data;

    if (data.status !== 0) {
      return res.json({ error: "❌ Failed to fetch video. Please try again." });
    }

    return res.json({
      status: "success",
      author: data.data.author.nickname,
      title: data.data.title,
      download: data.data.play, // No watermark URL
      thumbnail: data.data.cover,
      original_url: url
    });
  } catch (err) {
    return res.status(500).json({ error: "❌ Internal Server Error" });
  }
});

module.exports = router;