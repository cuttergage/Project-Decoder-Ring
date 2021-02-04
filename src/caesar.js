const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (!encode) shift = -shift;
    if (shift < 0) shift += 26;
    let result = "";
    const code = 0;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const position = alphabet.indexOf(char);
      if (position === -1) {
        result += char;
      } else {
        const newPosition = (position + shift) % 26;
        result += alphabet[newPosition];
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;