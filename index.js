/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


// The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.
// NOTE: The value returned from the <input> will be of type String.
// You’ll need to take the String of the 24 hour time and convert it to a number. The split() function and parseInt() function should help.

/* Write your implementation of greet() */
function greet(str) {
  // need to split the str at the :
  let hour = parseInt(str.split(':'));
  let time;
  if (hour < 12) {
    time = 'Good Morning';
  } else if (hour > 12 && hour < 17 ) {
    time = 'Good Afternoon';
  } else {
    time = "Good Evening";
  }
  // // If the time is earlier than 12pm, return "Good Morning".
  // If the time is between 12pm and 5pm, return "Good Afternoon".
  // If the time is later than 5pm, return "Good Evening".
  return time;
}

function displayMessage(str) {
  document.getElementById('greeting').innerText = str;
}
