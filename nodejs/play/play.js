const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname + '/play.env'),
});
// require('dotenv').config();

console.log('Hello, world!');
console.log('Nodemon ready for development.');
console.log(`Hello ${process.env.NAME}`);
process.exit();