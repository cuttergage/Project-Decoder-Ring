const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("substitutionModule", () => {
  
  it("return should encode and decode correctly, including with special characters", () => {
    expect(substitutionModule("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.eql("jrufscpw");
    expect(substitutionModule("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.eql("thinkful");
    expect(substitutionModule("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.eql("y&ii$r&");
    expect(substitutionModule("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.eql("message");
  });

  it("return should maintain spaces", () => {
    expect(substitutionModule("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.eql("elp xhm xf mbymwwmfj dne");
  });

  it("return false if alphabet parameter is not present, is not 26 characters, or does not have unique characters", () => {
    expect(substitutionModule("thinkful")).to.eql(false);
    expect(substitutionModule("thinkful", "short")).to.eql(false);
    expect(substitutionModule("thinkful", "abcabcabcabcabcabcabcabcyz")).to.eql(false);
  });
});