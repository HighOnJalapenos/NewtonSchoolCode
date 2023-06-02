document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const quoteElement = document.getElementById("quote");
  const timerElement = document.getElementById("timer");
  const wpmElement = document.getElementById("wpm");

  let quote = "";
  let startTime;
  let timerInterval;
  let correctStrokes = 0;
  let incorrectStrokes = 0;

  async function displayContent() {
    const data = await fetch("https://api.quotable.io/random");
    const data2 = await data.json();
    container.textContent = data2.content;
  }

  function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    const currentTime = Math.floor((new Date().getTime() - startTime) / 1000);
    timerElement.textContent = `Timer: ${currentTime}s`;
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerElement.textContent = "Timer: 0s";
  }

  function updateWPM() {
    const timeElapsed = Math.floor((new Date().getTime() - startTime) / 1000);
    const wpm = Math.round(correctStrokes / 5 / (timeElapsed / 60));
    wpmElement.textContent = `WPM: ${wpm}`;
  }

  function startGame() {
    container.classList.add("active");
    correctStrokes = 0;
    incorrectStrokes = 0;
    updateWPM();
    startTimer();
  }

  function stopGame() {
    container.classList.remove("active");
    stopTimer();
    quoteElement.innerHTML = "";
    quote = "";
    updateWPM();
  }

  function handleInput(e) {
    if (container.classList.contains("active")) {
      const typedChar = e.key;
      const currentChar = quote.charAt(correctStrokes);

      if (typedChar === currentChar) {
        quoteElement.innerHTML += `<span class="correct">${currentChar}</span>`;
        correctStrokes++;
      } else {
        quoteElement.innerHTML += `<span class="incorrect">${currentChar}</span>`;
        incorrectStrokes++;
      }

      if (correctStrokes === quote.length) {
        updateWPM();
        stopGame();
        getRandomQuote();
      } else {
        updateWPM();
      }
    }
  }

  document.addEventListener("keydown", handleInput);
  container.addEventListener("click", function (e) {
    if (e.target === container) {
      startGame();
    }
  });

  document.addEventListener("click", function (e) {
    if (!container.contains(e.target)) {
      stopGame();
    }
  });

  getRandomQuote();
});
