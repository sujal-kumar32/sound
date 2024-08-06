window.onload = function () {
  var playButton = document.getElementById("playButton");
  var sound = document.getElementById("sound");

  playButton.addEventListener("click", function () {
    sound.currentTime = 0; // Reset the sound to the beginning
    sound.play();
  });
};
