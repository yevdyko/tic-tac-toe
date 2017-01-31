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
        return (this.getWinner() !== null || this.isDraw());
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.board[0][i] === this.board[1][i] && 
                this.board[0][i] === this.board[2][i]) {
                return this.board[0][i];
            }
        }

        for (let j = 0; j < 3; j++) {
            if (this.board[j][0] === this.board[j][1] && 
                this.board[j][0] === this.board[j][2]) {
                return this.board[j][0];
            }
        }  

        if (this.board[0][0] === this.board[1][1] && 
            this.board[0][0] === this.board[2][2]) {
            return this.board[0][0];
        }

        if (this.board[0][2] === this.board[1][1] && 
            this.board[0][2] === this.board[2][0]) {
            return this.board[0][2];
        }

        return null;
    }

    noMoreTurns() {
        return this.turn === 9;
    }

    isDraw() {
        return (this.noMoreTurns() && this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
