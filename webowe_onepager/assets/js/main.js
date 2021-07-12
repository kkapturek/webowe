function scrollto(div) {
    $('html,body').animate(
    {
      scrollTop: $("#" + div).offset().top
    }, 'slow');
}

function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu_content") {
    x.className += " responsive";
  } else {
    x.className = "menu_content";
  }
}


window.onload = function() {

  // Video
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("start");
}
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});