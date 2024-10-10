document.querySelectorAll(".drum").forEach(function(button) {
  button.addEventListener("click", function() {
      var soundFile = this.getAttribute("data-sound");
      playSound(soundFile); 
  });
});

function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}
