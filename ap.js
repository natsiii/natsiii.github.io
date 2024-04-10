let currentPlayer;
let playerChoice;
let board = ['', '', '', '', '', '', '', '', ''];

document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    playerChoice = document.getElementById('player').value;
    currentPlayer = playerChoice;
    document.getElementById('playerForm').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
});

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        if (checkWinner()) {
            alert(`Wygrał gracz ${currentPlayer}!`);
            resetBoard();
        } else if (board.every(cell => cell !== '')) {
            alert('Remis!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetBoard() {
    currentPlayer = playerChoice;
    board = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cell => cell.innerText = '');
}

