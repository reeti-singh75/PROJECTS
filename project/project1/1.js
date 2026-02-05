let score = 0;
let timer;
let timeLeft = 30;
let name = '';

const startGame = () => {
    name = document.getElementById('username').value;
    if (!name) return alert('Please enter your name!');

    document.getElementById('game-section').style.display = 'block';
    startTimer();
};

const startTimer = () => {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
};

const checkPuzzle1 = () => {
    const ans = document.getElementById('puzzle1').value.trim().toLowerCase();
    if (ans === '123') {
        score += 10;
        document.getElementById('result1').innerText = '✅ Correct!';
    } else {
        alert('Please enter correct ans');

        document.getElementById('result1').innerText = '❌ Wrong!';
    }
};

const checkPuzzle2 = () => {
    const ans = parseInt(document.getElementById('puzzle2').value);
    if (ans === 30) {
        score += 10;
        document.getElementById('result2').innerText = '✅ Correct!';
    } else {
        document.getElementById('result2').innerText = '❌ Wrong!';
    }
};

const checkPuzzle3 = () => {
    const ans = document.getElementById('puzzle3').value.trim().toLowerCase();
    if (ans === 'echo') {
        score += 10;
        document.getElementById('result3').innerText = '✅ Correct!';
    } else {
        document.getElementById('result3').innerText = '❌ Wrong!';
    }
};

const endGame = () => {
    document.getElementById('final-score').innerHTML = `
    Game Over!<br>
    Name: ${name}<br>
    Score: ${score}/30<br>
    Time Taken: ${30 - timeLeft} seconds
  `;
};