const fs = require('fs/promises');

const fileName = './text.txt';

async function read() {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function write() {
  try {
    const content = 'Some data\n';
    await fs.writeFile('./paper.txt', content, {flag: 'a+'});
  } catch (err) {
    console.log(err);
  }
}

read();
write();
