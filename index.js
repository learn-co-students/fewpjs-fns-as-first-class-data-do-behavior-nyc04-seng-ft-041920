/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

// const displayMessage = (msg) => {
//   document.getElementById("greeting").innerText = msg
// }

// const greet = (str) => {
//   let hr = parseInt(str, 10);

//   if (hr < 12) return "Good Morning"
//   if (hr > 17) return "Good Evening"
//   else return "Good Afternoon"
// }

const displayMessage = (msg) => {
  document.querySelector("h1").innerText = msg
}

const greet = (str) => {
  let hrInt = parseInt(str)
  if(hrInt < 12) return "Good Morning"
  else if (hrInt > 17) return "Good Evening"
  else return "Good Afternoon"
}