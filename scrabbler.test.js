const Scrabbler = require("./scrabbler");

describe("test scrabbler", () => {
    it("contains a word in constructor", () => {
        scrabbler = new Scrabbler("cabbage");
        expect(scrabbler).toEqual({"word": "cabbage"});
    });
    
    it("returns the word", () => {
        scrabbler = new Scrabbler("cabbage");
        expect(scrabbler.getWord()).toBe("cabbage");
    });
});