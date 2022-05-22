import express from 'express';
import wiki from './wiki.js';

const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.use('/wiki', wiki);

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
});