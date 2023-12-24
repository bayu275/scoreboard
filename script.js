const scoreboard = document.querySelector('.scoreboard');
const winPointOpt = document.getElementById('winpoint');
const buttonReset = document.getElementById('reset');
const p1Display = document.getElementById('p1-display');
const p2Display = document.getElementById('p2-display');

let p1Score = 0;
let p2Score = 0;
let winPoint = parseInt(winPointOpt.value);
let isGameOver = false;

scoreboard.addEventListener('click', function (e) {
    const clickedButton = e.target;
    if (clickedButton.classList.contains('p1-button')) {
        if (!isGameOver) {
            p1Score += 1;
            if (p1Score === winPoint) {
                isGameOver = true;
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');
            }
            p1Display.textContent = p1Score;
        }
    }

    if (clickedButton.classList.contains('p2-button')) {
        if (!isGameOver) {
            p2Score += 1;
            if (p2Score === winPoint) {
                isGameOver = true;
                p2Display.classList.add('winner');
                p1Display.classList.add('loser');
            }
            p2Display.textContent = p2Score;
        }
    }
});

buttonReset.addEventListener('click', function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    document.getElementById('p1-display').textContent = p1Score;
    document.getElementById('p2-display').textContent = p2Score;
    document.getElementById('p1-display').classList.remove('winner', 'loser');
    document.getElementById('p2-display').classList.remove('winner', 'loser');
}

winPointOpt.addEventListener('change', function () {
    winPoint = parseInt(this.value);
    reset();
});
