/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {

  let time = parseInt(timeString.split(':'));

  if (time < 12) {
    return `Good Morning`;
  }

  if (time > 12 && time < 17) {
    return `Good Afternoon`;
  }

  if (time > 17) {
    return `Good Evening`;
  }
}

let result = greet(timeString);
console.log(result)

/* Write your implementation of displayMessage() */

function displayMessage(string) {
document.getElementById("greeting").innerText = string
}

