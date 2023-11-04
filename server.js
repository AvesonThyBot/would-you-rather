const express = require('express');
const app = express();
const eitherWyr = require('either-wyr');
const cors = require('cors');

// Enable all CORS requests
app.use(cors());

app.get('/get-question', async (req, res) => {
  try {
    const question = await eitherWyr();
    res.json(question);
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Error fetching question' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
