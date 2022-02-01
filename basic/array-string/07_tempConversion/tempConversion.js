const ftoc = function(f) {
  /* defence */
  if (typeof f != 'number') return 0;
  /* logic */
  let result = (f - 32) * 5 / 9;
  let rounded = Math.round(result * 10) / 10;
  return rounded;
};

const ctof = function(c) {
  /* defence */
  if (typeof c != 'number') return 0;
  /* logic */
  let result = c * 9 / 5 + 32;
  let rounded = Math.round(result * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
