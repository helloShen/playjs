const reverseString = function(str) {
    return str.split("").reverse().join("");
};

const reverseString2 = function(str) {
    let strarr = "";
    for (let i = 0; i <= str.length; i++) {
        strarr += str.charAt(str.length - i - 1);
    }
    return strarr;
};

// Do not edit below this line
module.exports = reverseString2;
