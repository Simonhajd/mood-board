
const inputbox = document.getElementById('mood');
const outbox = document.getElementById('moodbox');
const outerbox = document.getElementById('outbox');
const textyap = document.getElementById('textyap');
const thebody = document.getElementById('bodyid');
inputbox.addEventListener('input', moodchange);
// Check if the browser supports the Fullscreen API
function isFullscreenApiSupported() {
    return document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled;
  }
  
  // Request Fullscreen for an element
  function requestFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
      element.msRequestFullscreen();
    }
  }
  
  // Access the webcam and open it in full screen
  function openWebcamFullscreen() {
    if (!isFullscreenApiSupported()) {
      console.log('Your browser does not support the Fullscreen API');
      return;
    }
  
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        var video = document.createElement('video');
        video.srcObject = stream;
        video.setAttribute('playsinline', ''); // Required for iOS
        video.setAttribute('autoplay', ''); // Required for iOS
        video.setAttribute('muted', ''); // Required for some devices
        video.onloadedmetadata = function(e) {
          video.play();
          if (isFullscreenApiSupported()) {
            requestFullscreen(video);
          }
        };
        document.body.appendChild(video);
      })
      .catch(function(err) {
        console.log('An error occurred: ' + err);
      });
  }
  
function moodchange() {
    if (inputbox.value == "bananas") { 
        outbox.style.backgroundColor ="yellow";
    }
    else if (inputbox.value == "angy") {
        outbox.style.backgroundColor = "red";
    }
    else if (inputbox.value == "sawd") {
        outbox.style.backgroundColor = "blue";
    }  
    else if (inputbox.value == "hoppy") {
        outbox.style.backgroundColor = "pink";
    }
    else if (inputbox.value == "alone") {
        
        
        openWebcamFullscreen();
       
        
        
    }
    else 
    outbox.style.backgroundColor = "grey";   
}
