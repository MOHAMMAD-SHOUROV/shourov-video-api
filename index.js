const express = require('express');
const app = express();

app.use(express.json());

// Import all APIs
app.use('/api/fbvideo', require('./api/fbvideo'));
app.use('/api/tiktok', require('./api/tiktok'));
app.use('/api/insstagram',require('./api/instagram'));
// Add more routes if needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Shourov Video API চলছে: http://localhost:${PORT}`);
});
