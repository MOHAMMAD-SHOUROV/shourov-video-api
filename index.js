const express = require("express");
const app = express();

app.use("/api/tiktok", require("./api/tiktok"));
app.use("/api/instagram", require("./api/instagram"));
app.use("/api/facebook", require("./api/facebook"));

app.get("/", (req, res) => {
  res.send("✅ Shourov Video API is running!");
});

module.exports = app;