const timer = document.getElementById('stop-watch');

let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true;

function startTimer() {
	if (stopTime === true) {
		stopTime = false;
		timerCycle();
	}
}

function stopTimer() {
	if (stopTime === false) {
		stopTime = true;
	}
}

function resetTimer() {
	timer.innerHTML = '00:00:00';
	stopTime = true;
	hr, min, sec = 0;
}

function timerCycle() {
	if (stopTime === false) {
		sec = parseInt(sec);
		min = parseInt(min);
		hr = parseInt(hr);

		sec++;

		if (sec === 60) {
			min++;
			sec = 0;
		} 

		if (min === 60) {
			hr++;
			min = 0;
			sec = 0;
		}

		if (sec < 10 || sec === 0) {
			sec = `0${sec}`;
		}

		if (min < 10 || min === 0) {
			min = `0${min}`;
		}

		if (hr < 10 || hr === 0) {
			hr = `0${hr}`;
		}

		timer.innerHTML = `${hr}:${min}:${sec}`;
		setTimeout("timerCycle()", 1000);
	}
}