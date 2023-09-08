const ScrabblerSolver = require("./scrabblersolver");
const Scrabbler = require("./scrabbler");

describe("test constructor", () => {
    scrabblerSolver = new ScrabblerSolver();
    
    it("has an empty array of words chart", () => {
        expect(scrabblerSolver.wordsChart).toEqual([]);
    });
    it("has a points schema", () => {
        expect(scrabblerSolver.pointsSchema).toEqual({
            "A, E, I, O, U, L, N, R, S, T": 1, 
            "D, G": 2, 
            "B, C, M, P": 3, 
            "F, H, V, W, Y": 4, 
            "K": 5, 
            "J, X": 8, 
            "Q, Z": 10});
    });
});

describe("test decoding a word into the points", () => {
    scrabbler = new Scrabbler("cabbage");
    scrabblerSolver = new ScrabblerSolver();
    scrabblerSolver.decodeWord(scrabbler);
    it("decoding a word", () => {
        expect(scrabblerSolver.word).toEqual("cabbage");
        expect(scrabblerSolver.decodedWord).toEqual(["c", "a", "b", "b", "a", "g", "e"]);
    });
    it("calculate points", () => {
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(14);
    });
});

// expect(scrabblerSolver.wordsChart[0]).toEqual([{"word": "cabbage", "points": 14}])