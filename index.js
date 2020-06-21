/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(dayTime) {
  const dayHour = parseInt(dayTime.split(":")[0])
  
  if (dayHour < 12) {
    return "Good Morning"
  } else if (dayHour > 12 && dayHour < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greetingMessage) {
  let greeting = document.getElementById("greeting");
  greeting.innerText = greetingMessage;
}