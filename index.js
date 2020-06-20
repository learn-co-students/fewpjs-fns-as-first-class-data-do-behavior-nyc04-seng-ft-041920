/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const displayMessage = (message) => {
  document.getElementById("greeting").innerText = message
}

const greet = (timeStr) => {
  let timeInt = parseInt(timeStr, 10)
  if (timeInt < 12 ) return "Good Morning"
  else if (timeInt < 17) return "Good Afternoon"
  return "Good Evening"
}