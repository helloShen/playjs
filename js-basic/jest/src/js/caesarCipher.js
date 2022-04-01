function isLowercase(ch) {
  return (ch >= 'a' && ch <= 'z');
}

function isUppercase(ch) {
  return (ch >= 'A' && ch <= 'Z');
}

function isLetter(ch) {
  return (isLowercase(ch) || isUppercase(ch));
}

/* assertion: input ch is a letter */
function shift(ch, offset) {
  const firstLetter = (isLowercase(ch)) ? 'a' : 'A';
  let newOffset = ((ch.charCodeAt(0) - firstLetter.charCodeAt(0)) + offset) % 26;
  if (newOffset < 0) newOffset += 26;
  const newChar = String.fromCharCode(newOffset + firstLetter.charCodeAt(0));
  return newChar;
}

export default function caesarCipher(str, offset) {
  return str.split('').map((ch) => ((isLetter(ch)) ? shift(ch, offset) : ch)).join('');
}
