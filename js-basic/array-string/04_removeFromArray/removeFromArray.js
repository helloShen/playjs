const removeFromArray = function(arr, ...items) {
    /* Arguments are objects, not Array. Highly recommend to convert them to array before use. */
    let args = [...items];
    // let args = Array.from(items); // same as above
    for (let i = 0; i < args.length; i++) {
        let pos = 0;
        while ((pos = arr.indexOf(args[i])) != -1) {
            arr.splice(pos, 1);
        }
    }
    return arr;
};

/* local test */
// const arr = [1, 2, 3, 4];
// removeFromArray(arr, 3);
// console.log(arr);

// Do not edit below this line
module.exports = removeFromArray;
