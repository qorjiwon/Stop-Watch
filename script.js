const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let minutes = 0;
let interval;

buttonStart.onclick = function () {
    interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function () {
    clearInterval(interval);
}

buttonReset.onclick = function () {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    appendMinutes.innerText = '00';
    appendSeconds.innerText = '00';
}

function startTimer () {
    seconds++;

    if (seconds == 60) { // 60초 마다
        console.log("seconds");
        minutes++; // 1분 증가
        if (minutes < 10) {        
            appendMinutes.innerHTML = '0'+minutes;
        }
        seconds = 0;
        appendSeconds.innerHTML = 0;
    }
    else {
        appendSeconds.innerHTML = seconds;
    }
}


