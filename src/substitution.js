const substitutionModule = (function () {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  function duplicateLetters(alphabet) {
    let string = [];
    for (let i = 0; i < alphabet.length; i++) {
      let char = alphabet[i];
      string.push(char);
    }
      string.sort((letterA, letterB) => (letterA < letterB ? -1 : 1));
      for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
          return true;
        }
      }
    return false;
    }
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    if (duplicateLetters(alphabet)) {
      return false;
    }
    let result = "";
    input = input.toLowerCase();
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let letter = letters.indexOf(char);
        if (alphabet[letter]) {
          result += alphabet[letter];
        } else {
          result += char;
        }
      }
   } else {
     for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let alpha = alphabet.indexOf(char);
        if (letters[alpha]) {
          result += letters[alpha];
        } else {
          result += char;
        }
      }
   }
    return result;
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;