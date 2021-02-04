const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesarModule", () => {
  it("should return false if shift is not present, equal to 0, less than -25, or greater than 25", () => {
    const expected = false;
    expect(caesarModule("thinkful")).to.eql(expected);
    expect(caesarModule("thinkful", 0)).to.eql(expected);
    expect(caesarModule("thinkful", -26)).to.eql(expected);
    expect(caesarModule("thinkful", 26)).to.eql(expected);
  });
  it("return should maintain spaces and other non-alphabetic symbols", () => {
    expect(caesarModule("This is a secret message!", 8)).to.eql('bpqa qa i amkzmb umaaiom!');
    expect(caesarModule("BPQA qa I amkzmb umaaiom!", 8, false)).to.eql('this is a secret message!');
  });
  it("return should wrap alphabet", () => {
    const expected = "abc";
    expect(caesarModule("xyz", 3)).to.eql(expected);
  });
});