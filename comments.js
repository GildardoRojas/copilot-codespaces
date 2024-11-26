// Create web server
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('Comment received!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});