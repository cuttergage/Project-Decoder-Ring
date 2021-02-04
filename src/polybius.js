const polybiusModule = (function () {

  const alphabet = {
    a: "11", b: "21", c: "31", d: "41", e: "51",
    f: "12", g: "22", h: "32", i: "42", j: "42",
    k: "52", l: "13", m: "23", n: "33", o: "43",
    p: "53", q: "14", r: "24", s: "34", t: "44",
    u: "54", v: "15", w: "25", x: "35", y: "45", z: "55"
  }

  function polybius(input, encode = true) {
    let result = "";
    input = input.toLowerCase();
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (alphabet[char]) {
          result += alphabet[char];
        } else {
          result += char;
        }
      }
    } else {
      const input1 = input.split(" ").join("");
      if (input1.length %2 !== 0) {
        return false;
      }
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (isNaN(parseInt(char))) {
          result += char;
        } else {
          i++;
          char += input[i];
          if (char === "42") {
            result += "(i/j)";
          } else {
            const numbers = Object.values(alphabet);
            const index = numbers.indexOf(char);
            const letters = Object.keys(alphabet);
          result += letters[index];
          }
        }
      }
    }
    return result;
  }
  
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;