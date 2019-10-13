let scores, card1, card2, winningScore, gamePlaying;

function startGame() {
  //setting the variables to initial values
  scores = [0,0];
  card1 = 0;
  card2 = 0;
  gamePlaying = true;
  document.querySelector(".winner").textContent = "";
  updateScores();
  console.log(scores);
}

function updateScores() {
  document.querySelector('.scoreNum1').textContent = scores[0];
  document.querySelector('.scoreNum2').textContent = scores[1];
}

// Initializing the game on load
startGame();

document.querySelector('.btn-newGame').addEventListener('click', startGame);

document.querySelector('.btn-deal').addEventListener('click', function() {
  //Playing the game when the deal button is pressed
  if (gamePlaying) {
    card1 = Math.floor(Math.random() * 13) + 2;
    card2 = Math.floor(Math.random() * 13) + 2;
    console.log(card1);
    console.log(card2);
    if (card1 > card2) {
      scores[0]++;
    } else if (card1 < card2) {
      scores[1]++;
    }
    //updating the card images
    document.querySelector(".card1img").src = "./images/card" + card1 + ".png";
    document.querySelector(".card2img").src = "./images/card" + card2 + ".png";
    //updating the scores
    updateScores();
  }
})
