/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const timeParse = time.split(':')
  const timeHour = parseInt(timeParse[0])

  if (timeHour < 12) {
    return "Good Morning";
    } else if (timeHour >= 12 && timeHour <= 17) {
        return "Good Afternoon";
    } else if (timeHour > 17) {
        return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let greeting = document.querySelector("#greeting");
  greeting.innerText = message;
}