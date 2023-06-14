let container = document.getElementById("container");
let board = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
let player = "X";
let gameOver = false;
const X = "Player1";
const O = "Player2";

container.addEventListener("click", (event) => {
  move(event);
});

const winArray = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

function move(e) {
  if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.target.id)) {
    let idx = parseInt(e.target.id);
    if (!gameOver && board[idx - 1] === "0") {
      board[idx - 1] = player;
      e.target.textContent = player;
      checkWin();
      nextTurn();
    }
  }
}

function nextTurn() {
  player = player === "X" ? "O" : "X";
}

function checkWin() {
  for (let items of winArray) {
    let [a, b, c] = items;
    if (
      board[a - 1] !== "0" &&
      board[a - 1] === board[b - 1] &&
      board[a - 1] === board[c - 1]
    ) {
      gameOver = true;
      console.log(gameOver);
      if (player === "X") {
        setTimeout(() => {
          alert(`Congratulations! ${X} wins`);
        }, 100);
      } else {
        setTimeout(() => {
          alert(`Congratulations! ${O} wins`);
        }, 100);
      }
      break;
    }
  }
  if (!board.includes("0")) {
    gameOver = true;
    setTimeout(() => {
      alert(`Draw!`);
    }, 100);
  }
}
