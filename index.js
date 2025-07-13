const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/token', (req, res) => {
  const { userId, token } = req.body;

  if (!userId || !token) {
    return res.status(400).json({ message: "Missing userId or token" });
  }

  console.log(`✅ Received token from ${userId}: ${token}`);
  res.status(200).json({ message: "Token received" });
});

app.get('/', (req, res) => {
  res.send("✅ Token Notifier API is running.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
