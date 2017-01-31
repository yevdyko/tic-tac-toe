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
        if (this.board[rowIndex][columnIndex] === null)  {
            this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn++;
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
        return this.turn === 9;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
