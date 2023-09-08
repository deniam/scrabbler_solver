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
    it("decoding a word", () => {
        scrabblerSolver.decodeWord(scrabbler);
        expect(scrabblerSolver.word).toEqual("cabbage");
        expect(scrabblerSolver.decodedWord).toEqual(["c", "a", "b", "b", "a", "g", "e"]);
    });
    it("calculate points", () => {
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(14);
    });
    it("record points into the wordsChart", () => {
        scrabblerSolver.recordPoints();
        expect(scrabblerSolver.getPointsByWord(scrabbler)).toEqual({"word": "cabbage", "points": 14});
        expect(scrabblerSolver.wordsChart[0]).toEqual({"word": "cabbage", "points": 14});
    });
});

describe("Acceptance Criteria", () => {
    scrabblerSolver = new ScrabblerSolver();

    it("Calculate and return correct score of points for ('')", () => {
        scrabbler1 = new Scrabbler('');
        scrabblerSolver.decodeWord(scrabbler1);
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(0);
    });

    it("Calculate and return correct score of points for (' \t\n')", () => {
        scrabbler2 = new Scrabbler(' \t\n');
        scrabblerSolver.decodeWord(scrabbler2);
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(0);
    });

    it("Calculate and return correct score of points for (null)", () => {
        scrabbler3 = new Scrabbler(null);
        scrabblerSolver.decodeWord(scrabbler3);
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(0);
    });

    it("Calculate and return correct score of points for ('a')", () => {    
        scrabbler4 = new Scrabbler('a');
        scrabblerSolver.decodeWord(scrabbler4);
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(1);
    });

    it("Calculate and return correct score of points for ('f')", () => { 
        scrabbler5 = new Scrabbler('f');
        scrabblerSolver.decodeWord(scrabbler5);
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(4);
    });

    it("Calculate and return correct score of points for ('street')", () => { 
        scrabbler6 = new Scrabbler('street');
        scrabblerSolver.decodeWord(scrabbler6);
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(6);
    });

    it("Calculate and return correct score of points for ('quirky')", () => { 
        scrabbler7 = new Scrabbler('quirky');
        scrabblerSolver.decodeWord(scrabbler7);
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(22);
    });

    it("Calculate and return correct score of points for ('OXYPHENBUTAZONE')", () => { 
        scrabbler7 = new Scrabbler('OXYPHENBUTAZONE');
        scrabblerSolver.decodeWord(scrabbler7);
        scrabblerSolver.calculatePoints();
        expect(scrabblerSolver.points).toEqual(41);
    });
});


    scrabbler5 = new Scrabbler('f');
    scrabbler6 = new Scrabbler('street');
    scrabbler7 = new Scrabbler('quirky');
    scrabbler8 = new Scrabbler('OXYPHENBUTAZONE');