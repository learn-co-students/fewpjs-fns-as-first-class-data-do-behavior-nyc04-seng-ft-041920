/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(ct) {
  ct = parseInt(ct)
  console.log(ct)
  if (ct >= 12 && ct <= 17) {
    return ("Good Afternoon")
  }
  else if (ct > 17) {
    return ("Good Evening")
  } else if (ct < 12) {
    return ("Good Morning")
  }
}

function displayMessage(str) {
  document.getElementById("greeting").innerText = str
}
