const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname + '/server.env'),
});
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, world!</h1>');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});