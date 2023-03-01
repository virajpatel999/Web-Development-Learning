const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startgame = () => {
    let StartButton = document.querySelector(".intro button");
    let intro = document.querySelector(".intro");
    let match = document.querySelector(".match");

    StartButton.addEventListener("click", () => {
      intro.classList.add("fadeout");
      match.classList.add("fadein");
    });
  };
  //play match
  const playgame = () => {
    const PlayerHand = document.querySelector(".player-hand");
    const ComputerHand = document.querySelector(".computer-hand");
    const options = document.querySelectorAll(".option button");
    const hands = document.querySelectorAll(".hands img");
    const ComputerOptions = ["rock", "paper", "scissors"];

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const ComputerNumber = Math.floor(Math.random() * 3);
        const ComputerChoice = ComputerOptions[ComputerNumber];

        setTimeout(() => {
          //compare hands
          CompareHands(this.textContent, ComputerChoice);
          //update images
          PlayerHand.src = `./${this.textContent}.png`;
          ComputerHand.src = `./${ComputerChoice}.png`;
        }, 2000);

        PlayerHand.style.animation = "shake-player 2s ease";
        ComputerHand.style.animation = "shake-computer 2s ease";
      });
    });
  };
  const UpdateScore = () => {
    const PlayerScore = document.querySelector(".player-score p");
    const ComputerScore = document.querySelector(".computer-score p");
    PlayerScore.textContent = pScore;
    ComputerScore.textContent = cScore;
  };

  const CompareHands = (playerChoice, ComputerChoice) => {

    const winner = document.querySelector(".winner");
    if (playerChoice === ComputerChoice) {
      winner.textContent = "It is a Tie";
      return;
    }
    //    for rock
    if (playerChoice === "rock") {
      if (ComputerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        UpdateScore();
        return;
      }
    }
    //   for paper
    if (playerChoice === "paper") {
      if (ComputerChoice === "scissors") {
        winner.textContent = "Computer wins";
        cScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        UpdateScore();
        return;
      }
    }
    //   for scissor
    if (playerChoice === "scissors") {
      if (ComputerChoice === "paper") {
        winner.textContent = "Player wins";
        pScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        UpdateScore();
        return;
      }
    }
  };

  startgame();
  playgame();
};
//main game funcion
game();
