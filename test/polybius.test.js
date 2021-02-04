const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybiusModule", () => {
  
  it("encoding output should be a string of number pairs", () => {
    expect(polybiusModule("thinkful")).to.eql("4432423352125413");
  });
  
  it("decoding string with an odd number of characters excluding spaces should return false", () => {
    expect(polybiusModule("44324233521254134", false)).to.eql(false);
  });
  
  it("return should maintain spaces", () => {
    expect(polybiusModule("Hello world")).to.eql("3251131343 2543241341");
    expect(polybiusModule("3251131343 2543241341", false)).to.eql("hello world");
  });
  
  it("encoding return should convert both 'i' and 'j' to 42", () => {
    expect(polybiusModule("thinkful")).to.eql("4432423352125413");
    expect(polybiusModule("jolly")).to.eql("4243131345");
  });
  
  it("decoding return should show 'i' and 'j' as '(i/j)'", () => {
    expect(polybiusModule("4432423352125413", false)).to.eql("th(i/j)nkful")
  });
});