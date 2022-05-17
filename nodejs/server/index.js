const http = require('http');
// const url = require('url');
const fs = require('fs/promises');

(async() => {
  try {
    const index = await fs.readFile('./index.html', 'utf-8');
    const about = await fs.readFile('./about.html', 'utf-8');
    const contact = await fs.readFile('./contact.html', 'utf-8');
    const page404 = await fs.readFile('./404.html', 'utf-8');
    const server = http.createServer((req, res) => {
      res.writeHead(200, 'Content-Type', 'text/html');
      // res.end(`request.url: ${req.url}\nrequest header host: ${req.headers.host}`);
      const baseURL = (req.socket.encrypted ? 'https' : 'http') + '://' + req.headers.host;
      const myURL = new URL(req.url, baseURL);
      switch (myURL.pathname) {
        case '/':
          res.end(index);
          break;
        case '/about':
          res.end(about);
          break;
        case '/contact':
          res.end(contact);
          break;
        default:
          res.end(page404);
      }
    });
    server.listen(5000, 'localhost');
  } catch (err) {
    console.log(err);
  }
})();


