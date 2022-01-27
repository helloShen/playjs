// let's say we have a list of non-ordered numbers
let nums1 = [4,5,3,6,2,1];
let nums2 = [4,5,3,6,2,1];

// Array.sort() function requires a compare function
nums1.sort(compare);
function compare(x, y) {
    return x - y;
}

// using lambda(arrow) function, code looks like
nums2.sort((x, y) => x - y);

console.log(nums1); // output: [1,2,3,4,5,6]
console.log(nums2); // output: [1,2,3,4,5,6]

/*
 * multiple-line lambda function needs curly braces.
 * if curly braces are added, then we need a explicit return.
 */
let sum_array = num_array => {
    let sum = 0;
    nums1.forEach(num => sum += parseInt(num));
    return sum;
}

console.log(sum_array(nums1)); // output: 31