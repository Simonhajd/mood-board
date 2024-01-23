
const inputbox = document.getElementById('mood');
const outbox = document.getElementById('moodbox');
const outerbox = document.getElementById('outbox');
const textyap = document.getElementById('textyap');
const thebody = document.getElementById('bodyid');
moodbox.addEventListener('click', moodchange);

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
        outbox.remove()
        outerbox.remove()
        inputbox.remove()
        textyap.remove()
        window.close();
        document.body.style.backgroundColor = "black";
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    else 
    outbox.style.backgroundColor = "grey";   
}
