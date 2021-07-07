/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(string) {

  let hour = parseInt(string.split(':'));
  let time;
  if (hour < 12) {
    time = 'Good Morning';
  } else if (hour > 12 && hour < 17 ) {
    time = 'Good Afternoon';
  } else {
    time = "Good Evening";
  }
  return time;
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}
