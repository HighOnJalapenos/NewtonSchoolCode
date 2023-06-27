window.onload = function () {
  const gridContainer = document.getElementById("gridContainer");
  const resultDisplay = document.getElementById("resultDisplay");
  const gameScore = document.getElementById("gameScore");
  const flagScore = document.getElementById("flagScore");
  const resetButton = document.getElementById("resetButton");

  const gridSize = 9;
  const totalCells = gridSize * gridSize;
  const totalBombs = 10;

  let bombLocations = [];
  let clickedCells = [];
  let flaggedCells = [];
  let score = 0;
  let flagCount = 0;

  resetButton.addEventListener("click", resetGame);

  function resetGame() {
    bombLocations = generateBombLocations();
    clickedCells = [];
    flaggedCells = [];
    score = 0;
    flagCount = 0;
    updateFlagScore();
    renderGrid();
    resultDisplay.textContent = "";
  }

  function generateBombLocations() {
    const bombLocations = [];
    while (bombLocations.length < totalBombs) {
      const randomIndex = 1 + Math.floor(Math.random() * (totalCells - 1));
      if (!bombLocations.includes(randomIndex)) {
        bombLocations.push(randomIndex);
      }
    }
    return bombLocations;
  }

  function renderGrid() {
    gridContainer.innerHTML = "";
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = "cell_" + i;

      cell.addEventListener("click", handleCellClick);
      cell.addEventListener("contextmenu", handleCellRightClick);

      gridContainer.appendChild(cell);
    }
  }

  function handleCellClick(event) {
    const cellId = event.target.id;
    const cellIndex = parseInt(cellId.split("_")[1]);

    if (clickedCells.includes(cellIndex) || flaggedCells.includes(cellIndex)) {
      return;
    }

    if (bombLocations.includes(cellIndex)) {
      gameOver();
    } else {
      clickedCells.push(cellIndex);
      event.target.classList.add("clicked");
      score++;
      gameScore.textContent = score;
      checkWinCondition();
    }
  }

  function handleCellRightClick(event) {
    event.preventDefault();
    const cellId = event.target.id;
    const cellIndex = parseInt(cellId.split("_")[1]);

    if (clickedCells.includes(cellIndex)) {
      return;
    }

    if (flaggedCells.includes(cellIndex)) {
      flaggedCells = flaggedCells.filter((cell) => cell !== cellIndex);
      event.target.classList.remove("flagged");
      flagCount--;
    } else {
      flaggedCells.push(cellIndex);
      event.target.classList.add("flagged");
      flagCount++;
    }

    updateFlagScore();
  }

  function updateFlagScore() {
    flagScore.textContent = "FLAGS = " + flagCount;
  }

  function gameOver() {
    revealBombs();
    resultDisplay.textContent = "game over";
  }

  function checkWinCondition() {
    if (score + totalBombs === totalCells) {
      resultDisplay.textContent = "win";
    }
  }

  function revealBombs() {
    bombLocations.forEach((index) => {
      const cell = document.getElementById("cell_" + index);
      cell.classList.add("bomb");
    });
  }

  resetGame();
};
