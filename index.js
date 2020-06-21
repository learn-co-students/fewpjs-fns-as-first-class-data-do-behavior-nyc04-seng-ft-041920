/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
  //console.log(displayMessage(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let splitString = string.split(":", 1);
  let parsedString = parseInt(splitString);
  if (parsedString < 12) {
    return "Good Morning";
  } else if (parsedString >= 12 && parsedString <= 17){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  //return greet(string)
  document.getElementById("greeting").innerText = string
}