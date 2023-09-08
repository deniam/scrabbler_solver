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
        if(scrabbler.getWord() == null || scrabbler.getWord().includes('\t', '\n')) {
            this.decodedWord = [];
        } else {
            this.word = scrabbler.getWord();
            this.decodedWord = scrabbler.getWord().split('');
        }
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
        const wordChart = {
            word: this.word, 
            points: this.points};
        if (wordChart.points !== 0) 
        {this.wordsChart.push(wordChart)};
    };

    getPointsByWord(scrabbler) {
        const findWord = scrabbler.getWord();
        for (const index in this.wordsChart) {
            const wordChart = this.wordsChart[index];
            if (wordChart.word === findWord) {
                return wordChart;
            } else {
                console.log("This word hasn't been checked yet");
            }
        };
    };
    getWordsChart() {
        return this.wordsChart.sort((a, b) => b.points - a.points);
    }
};

module.exports = ScrabblerSolver;