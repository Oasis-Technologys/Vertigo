// Primal Main.js

// Homepage /primal
// Audio Player & Button
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.play');
    var audio = document.getElementById('audioPlayer');
    var playPauseButton = document.getElementById('toggleMusic');
    function togglePlayPause() {
      if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "<img src='../static/img/volume.png' height='30' width='30'></img>";
      } else {
        audio.pause();
        playPauseButton.innerHTML = "<img src='../static/img/mute.png' height='30' width='30'></img>";
      }
    }

  // Button Links 
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            // You can perform any action here when the element is clicked
            // For demonstration, let's log the ID of the clicked element to the console
            console.log('Clicked element ID:', element.id);
            
            // Redirect based on the clicked element
            switch (element.id) {
                case 'storyMode':
                    window.location.href = "/storymode";
                    break;
                case 'multiplayer':
                    window.location.href = "/online/connect";
                    break;
                case 'sandbox':
                    window.location.href = "/sandbox";
                    break;
                case 'learning':
                    window.location.href = "/learning/hub";
                    break;
                case 'settings':
                    window.location.href = "/settings";
                    break;
                case 'toggleMusic':
                    togglePlayPause();
                    break;
                // Add more cases for additional elements if needed
                default:
                    break;
            }
        });
    });
});