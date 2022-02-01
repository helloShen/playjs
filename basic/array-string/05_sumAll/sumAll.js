const sumAll = function(a, b) {
    if ((typeof a !== "number") || (typeof b !== "number")) return 'ERROR';
    if ((a < 0) || (b < 0)) return "ERROR";
    let result = 0;
    let lo = Math.min(a, b);
    let hi = Math.max(a, b);
    for (let i = lo; i <= hi; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
