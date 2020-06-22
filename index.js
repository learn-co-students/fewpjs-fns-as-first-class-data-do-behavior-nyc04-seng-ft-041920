/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  time = parseInt(time.split(':'));
  if (time < 12) {
      return "Good Morning"
    }else if(time <= 17 && time>=12){
      console.log(time);
      return "Good Afternoon"
    }else if(time > 17){
      return "Good Evening"
    }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.querySelector("#greeting").innerText = msg
}