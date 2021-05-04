const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');

const mostRecentScore = localStorage.getItem('mostRecentScore');
//display scores from local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;


//event listener
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
// save high score
saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);

    highScores.sort((a, b) =>
        b.score - a.score
    )

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');

}

