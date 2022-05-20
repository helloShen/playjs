const http = require('http');

const options = {
  hostname: 'boilerplate-mongomongoose.helloshen.repl.co',
  port: 3000,
  path: '/create-and-save-person',
  method: 'GET',
};

const req = http.request(options, (res) => console.log(res));
req.on('error', (error) => console.log(error));
req.end();

// const axios = require('axios');
// const axios = require('axios'); const http = require('http');
// axios.get('http://boilerplate-mongomongoose.helloshen.repl.co:3000/create-and-save-person');