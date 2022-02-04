const leapYears = function(year) {
    /* defend */
    if (typeof year != "number") return false;
    if (year <= 0) return false;
    /* logic */
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true; // % 4 === 0
    return (year % 400 === 0)? true : false; // % 100 === 0
};

// Do not edit below this line
module.exports = leapYears;
