// Primal Main.js

// Homepage /primal
// Audio Player & Button
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.play');
    var audio = document.getElementById('audioPlayer');
    var playPauseButton = document.getElementById('toggleMusic');
    var setplay = false;

    if(setplay == true){
        audio.play();
        playPauseButton.innerHTML = "<img src='../static/img/volume.png' height='30' width='30'></img>";
    }
    function togglePlayPause() {
      if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "<img src='../static/img/volume.png' height='30' width='30'></img>";
        setplay = true;
      } else {
        audio.pause();
        playPauseButton.innerHTML = "<img src='../static/img/mute.png' height='30' width='30'></img>";
        setplay = false;
      }
    }

// Settings

// Display Settings in iframe

function setiframe(){
// Get all elements with the class "d-1 play"
var elements = document.querySelectorAll('.d-2.play');

// Get the iframe and its container
var iframeContainer = document.getElementById('iframe-container');
var iframe = document.getElementById('content-iframe');

// Function to load content into the iframe
function loadContentIntoIframe(content) {
  iframe.contentDocument.open();
  iframe.contentDocument.write(content);
  iframe.contentDocument.close();
}

// Function to load content from a file
function loadContentFromFile(filePath) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        loadContentIntoIframe(xhr.responseText);
      }
    }
  };
  xhr.open("GET", filePath, true);
  xhr.send();
}

// Iterate through each element and add a click event listener
elements.forEach(function(element) {
  element.addEventListener('click', function() {
    console.log('Clicked element ID:', element.id);

    if(element.id = 'general')
    {
        var filePath = "../game/templates/settings/general.html"; // current 404
        loadContentFromFile(filePath);
    }
    
  });
});
}
  // Button Links 
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
          
            console.log('Clicked element ID:', element.id);
            
            // Redirect based on the clicked element
            switch (element.id) {
                case 'storyMode':
                    window.location.href = "/storymode";
                    break;
                case 'multiplayer':
                    window.location.href = "/multiplayer";
                    break;
                case 'sandbox':
                    window.location.href = "/sandbox";
                    break;
                case 'learning':
                    window.location.href = "/learning";
                    break;
                case 'settings':
                    window.location.href = "/settings";
                    break;
                case 'credits':
                    window.location.href = "/credits";
                    break;
                case 'toggleMusic':
                    togglePlayPause();
                    break;
                case 'general':
                    setiframe();                    
                    break;
                case 'audio':
                    setiframe();                    
                    break;
                case 'gameplay':
                    setiframe();                    
                    break;
                case 'code':
                    setiframe();                    
                    break;
                case 'account':
                    setiframe();                    
                    break;
                case 'developer':
                    setiframe();                    
                    break;
                case 'back':
                    window.location.href = "/primal";
                    break;
                // Add more cases for additional elements if needed
                default:
                    break;
            }
        });
    });
});