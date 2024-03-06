const main = document.getElementById('main');
const inputbox = document.getElementById('mood');
const outbox = document.getElementById('moodbox');
const outerbox = document.getElementById('outbox');
const textyap = document.getElementById('textyap');
const thebody = document.getElementById('bodyid');
inputbox.addEventListener('change', moodchange);

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
        document.body.style.backgroundColor = "black";
        main.remove();
        document.body.requestFullscreen();
        
    }
    else 
    outbox.style.backgroundColor = "grey";   
}
