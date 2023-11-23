let timer1, timer2;
let interval;

function startTimer(player) {
    clearInterval(interval); // Stop any existing timers

    let minutes = 0;
    let seconds = 0;

    if (player === 1) {
        timer1 = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateTimerDisplay(1, minutes, seconds);
        }, 1000);
    } else if (player === 2) {
        timer2 = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateTimerDisplay(2, minutes, seconds);
        }, 1000);
    }
}

function updateTimerDisplay(player, minutes, seconds) {
    const timerDisplay = document.getElementById(`timer${player}`);
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timer1);
    clearInterval(timer2);

    document.getElementById('timer1').textContent = '00:00';
    document.getElementById('timer2').textContent = '00:00';
}
