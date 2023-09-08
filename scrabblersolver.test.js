const ScrabblerSolver = require("./scrabblersolver");

describe("test constructor", () => {
    it("has an empty array of words chart", () => {
        scrabblerSolver = new ScrabblerSolver();
        expect(scrabblerSolver.wordsChart).toEqual([]);
    });
    it("has a points schema", () => {
        scrabblerSolver = new ScrabblerSolver();
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

