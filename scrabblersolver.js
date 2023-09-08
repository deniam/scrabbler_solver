class ScrabblerSolver {
    constructor () {
        this.wordsChart = [];
        this.pointsSchema = {
            "A, E, I, O, U, L, N, R, S, T": 1, 
            "D, G": 2, 
            "B, C, M, P": 3, 
            "F, H, V, W, Y": 4, 
            "K": 5, 
            "J, X": 8, 
            "Q, Z": 10
        }
    };

    decodeWord(scrabbler) {
        this.word = scrabbler.getWord();
        this.decodedWord = scrabbler.getWord().split('');
        console.log(this.word);
    };

    calculatePoints() {
        this.points = 0;
        this.decodedWord.forEach((char) => {
            for(const key in this.pointsSchema) {
                if (key.includes(char.toUpperCase())) {
                    this.points += this.pointsSchema[key];
                    break;
                };
            };
        });
    };

    recordPoints() {
        wordChart = [{
            word: this.word, 
            points: this.points}];

        this.wordsChart.push(wordChart);
    };

    getPoints(scrabbler) {
        return this.wordsChart[scrabbler];
    };
};

module.exports = ScrabblerSolver;