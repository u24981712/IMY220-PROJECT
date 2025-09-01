const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.static("FrontEnd/public"));

// app.get('/api/data', (req, res) => {
//   try {
//     const dataPath = path.join(__dirname, 'data.json');

//     const jsonData = fs.readFileSync(dataPath, 'utf8');

//     const data = JSON.parse(jsonData);

//     res.json(data);

//   } catch (error) {

//     console.error('Error reading data.json:', error);

//     res.status(500).json({ error: 'Failed to read data file' });
//   }
// });

app.get('/api', (req, res) => {
  res.json({message: "Bruhhh"})
})

app.get('/{*any}', (req, res) => {
  res.sendFile(path.resolve('FrontEnd/public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});