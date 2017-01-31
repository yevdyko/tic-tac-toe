class TicTacToe {
    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null], 
            [null, null, null]
        ]
        this.turn = 0;
    }

    getCurrentPlayerSymbol() {
        return this.turn % 2 === 0 ? "x" : "o";
    }

    nextTurn(rowIndex, columnIndex) {
       
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
