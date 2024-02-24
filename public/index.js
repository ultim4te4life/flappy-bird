const playButton = document.getElementById("play-button");
const playButtonLink = document.getElementById("play-button-link");

const nameInput = document.getElementById("player-name");

const errorMessage = document.getElementById("error-message");

playButton.addEventListener("click", function () {
  if (nameInput.value.length === 0) {
    errorMessage.textContent = "Please enter your name";
  } else {
    errorMessage.textContent = "";
    localStorage.setItem("playerName", nameInput.value);
    playButtonLink.setAttribute("href", "./game/index.html");
    playButtonLink.click();
  }
});
