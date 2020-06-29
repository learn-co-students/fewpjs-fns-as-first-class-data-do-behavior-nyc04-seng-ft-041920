/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(givenTime) {
let hour = parseInt(givenTime.split(" : "));
console.log (greeting);
 if (hour < 12) {
   return "Good Morning"
 }
 else if (hour >12 && hour <17) {
   return "Good Afternoon"
 }
 else {
   return "Good Evening"
 }

}



/* Write your implementation of displayMessage() */
function displayMessage(string) {
document.getElementById("greeting").innerText = string;
}