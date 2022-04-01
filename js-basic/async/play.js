const testPromise = () => {
  function randomTime(max) {
    return Math.floor(Math.random() * max);
  }

  function loadFile(fileName) {
    return new Promise((resolve, reject) => {
      const time = randomTime(2000);
      setTimeout(() => {
        if (fileName !== 'file1') { // emulate that file1 is broken
          console.log(`loading ${fileName}`);
          resolve({fileName, time});
        } else {
          reject(`${fileName} is broken!`);
        }
      }, time);
    });
  }

  function print(result) {
    console.log(`${result.fileName} loaded in ${result.time} millisecond!`);
  }

  function handleError(err) {
    console.log(`Error: ${err}`);
  }

  const promisedFile1 = loadFile('file1');
  const promisedFile2 = loadFile('file2');
  promisedFile1.then((result) => print(result)).catch((err) => handleError(err));
  promisedFile2.then((result) => print(result)).catch((err) => handleError(err));

  async function printFile(fileName) {
    const promisedFile = await loadFile(fileName);
    print(promisedFile);
  }

  printFile('file1').then(printFile('file2')).then(printFile('file3')).then(printFile('file4')).catch((err) => handleError(err));

};

const testSetTimeOut = () => {
  function logAfter5secs() {
    setTimeout(() => console.log('logAfter5secs() finish it\'s job.'), 5000);
  }
  console.log('Immidiate log task 1');
  logAfter5secs();
  console.log('Immidiate log task 2');
};


/* invoke tests */
// testPromise();
testSetTimeOut();