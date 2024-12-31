//step 1; Access time input $ set alarm button??
const timeInput = document.querySelector("#alarmSet");
const setAlarmButton = document.querySelector("#set");
const remainingTimeCounter = document.querySelector("#timeRemaining");



//step 2; create an event listener when set button is clicked.
setAlarmButton.addEventListener("click", function(){ 
 //console.log(timeInputValue, "<--- the value of input");
 let timeInputValue = timeInput.value;
 countdown(timeInputValue);
});

//the countdown, how can I set a countdown?
function countdown(timeInputValue) {
  let counter = timeInputValue;

  // Set up the interval
  const intervalId = setInterval(() => {
    remainingTimeCounter.innerText = `Time Remaining: ${formatTime(counter)}`;
    counter--; // Decrease the counter by 1 and update display of count

    // Stop the timer when it reaches below zero
    if (counter === 0) {
        clearInterval(intervalId); // play alarm
        remainingTimeCounter.innerText = "Time Remaining: 00:00"
        playAlarm()
        
    }
  }, 1000); // Run every 1000 milliseconds (1 second)
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60); // Calculate the number of minutes
  const remainingSeconds = seconds % 60;  // Get the remaining seconds

  // Pad minutes and seconds with leading zero if needed
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
 

function setAlarm() {}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
