/* 
Steps:
1. Find first number
2. Find second number
3. Find the plus button

4. Create a function which reacts to the click
5. Tell the button to call a function when it is clicked on:
6. Do the right action
7. Show the result in alert
*/


let inputNumber1 = document.getElementById("inputNumber1"); // find input number in HTML
let inputNumber2 = document.getElementById("inputNumber2");


let plusButton = document.getElementById("plusButton");      // find buttons in HTML
let minusButton = document.getElementById("minusButton");
let multiplyButton = document.getElementById("multiplyButton");
let devideButton = document.getElementById("devideButton");
let additionalButton = document.getElementById("additionalButton")


function getNumbers() {

   let value1 = new Number (inputNumber1.value);    // turn string values to numbers
   let value2 = new Number (inputNumber2.value);
 
   let numbers = {     // create an object with the input values
    num1: value1,
    num2: value2
   }
  return numbers;
  }

  
let btnOnClick = function (event) {    

   let eventTarget = event.target;    //find what element was clicked on
   let pressedOperationValue = eventTarget.value;  // find that elements value

   let numbers = getNumbers();    //use the input values
   let resultValue;
   
     if (pressedOperationValue == "+") {          // do the action to get a result
      resultValue = numbers.num1 + numbers.num2;
     }
     else if (pressedOperationValue == "-") {
      resultValue = numbers.num1 - numbers.num2;
     }
     else if (pressedOperationValue == "x") {
      resultValue = numbers.num1 * numbers.num2;
     }
     else if (pressedOperationValue == "/") {
      resultValue = numbers.num1 / numbers.num2;
     }

  alert (`Equals: ${resultValue}`)  // result

}


function Counter() {

  let count = 0;

  return function () {
      count++;
      return alert(count);
  }
}

let counter = Counter();

plusButton.addEventListener('click', btnOnClick) 
minusButton.addEventListener('click', btnOnClick) 
multiplyButton.addEventListener('click', btnOnClick) 
devideButton.addEventListener('click', btnOnClick) 
additionalButton.addEventListener('click', counter)






