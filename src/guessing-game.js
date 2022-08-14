class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.resGuess = 0;
    }

    guess() {
        this.resGuess = this.max - Math.floor((this.max - this.min) / 2);
        return this.resGuess;
    }

    lower() {
        this.max = this.resGuess;
    }

    greater() {
        this.min = this.resGuess;
    }
}

module.exports = GuessingGame;
