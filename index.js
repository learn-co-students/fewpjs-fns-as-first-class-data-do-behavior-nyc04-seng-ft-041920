/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const timeArray = time.split(":")
  const hour = parseInt(timeArray[0])
  if(hour > 17){
    return "Good Evening"
  } else if (hour > 12 ){
    return "Good Afternoon"
  } else {
    return "Good Morning"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(text){
  let node = document.getElementById("greeting")
  node.innerText = text
}
