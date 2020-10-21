let gameBoard = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
]

let gameOver = false
const cellDivs = document.querySelectorAll('.cell')

cellDivs.forEach(el => {
    el.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if (gameBoard[selectedRow][selectedCol] == '-') {
            selectedCell.innerText = 'X'
            gameBoard[selectedRow][selectedCol] = 'X'
        }
        if (gameBoard[0][0] == 'X') {
            document.getElementById("02").innerText = "O";
        }
        if (gameBoard[0][1] == 'X') {
            document.getElementById("00").innerText = "O";
        }
        if (gameBoard[0][2] == 'X') {
            document.getElementById("10").innerText = "O";
        }
        if (gameBoard[1][0] == 'X') {
            document.getElementById("20").innerText = "O";
        }
        if (gameBoard[0][0] == 'X' && gameBoard[0][1] == 'X' && gameBoard[0][2] == 'X') {
            console.log('player win')
        } else {
            gameOver = true
        }
        if (gameBoard[1][0] == 'X' && gameBoard[1][1] == 'X' && gameBoard[1][2] == 'X') {
            console.log('player win')
        } else {
            gameOver = true
        }
        if (gameBoard[2][0] == 'X' && gameBoard[2][1] == 'X' && gameBoard[2][2] == 'X') {
            console.log('player win')
        } else {
            gameOver = true
        }
        if (gameBoard[0][0] == 'X' && gameBoard[1][1] == 'X' && gameBoard[2][2] == 'X') {
            console.log('Player win')
        } else {
            gameOver = true
        }
        if (gameBoard[0][2] == 'X' && gameBoard[1][1] == 'X' && gameBoard[2][0] == 'X') {
            console.log('Player win')
        } else {
            gameOver = true
        }
        if (gameBoard[0][1] == 'X' && gameBoard[1][1] == 'X' && gameBoard[2][1] == 'X') {
            console.log('Player win')
        } else {
            gameOver = true
        }
        if (gameBoard[0][0] == 'X' && gameBoard[1][0] == 'X' && gameBoard[2][0] == 'X') {
            console.log('Player win')
        } else {
            gameOver = true
        }
        if (gameBoard[0][2] == 'X' && gameBoard[1][2] == 'X' && gameBoard[2][2] == 'X') {
            console.log('Player win')
        } else {
            gameOver = true
        }
        console.log(gameBoard)

    })
});
