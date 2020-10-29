

//Робота з рядками
var str = prompt ("What's your favorite fruit?", "Pineapple");

var firstLet = str[0];
var secondToLastLet = str[str.length -2];  

console.log ("First letter: " + (firstLet));
console.log ("Second letter to the last: " +(secondToLastLet));




//-----------------------
// for...in
let apples = {};   

  apples["John"] = +prompt ("How many apples does John have?");
  apples["Tom"] = +prompt ("How many apples does Tom have?");
  apples["James"] = +prompt ("How many apples does James have?");
;
let sum = 0;
 for (let key in apples) {     
  sum += apples[key];
}   

alert("Together they have " + sum + " apples."); 




//---------------------
// switch statement
 
  let guessNumber = prompt("Guess a number from 1 to 10?", "2");
    let answer= ""; 

  switch (guessNumber) {  
    
   case '1':    
   case '2':    
   case '3':      
    answer = "No, sorry.";      
    break;
    
  case '4':
   answer = "Conagratulations! You're right!"
   break;
   
  case '5':    
  case '6':
  case '7':      
   answer = "Wrong. Maybe you'll guess some other time.";      
   break;
   
  case '8':    
  case '9':
  case '10':      
   answer = "No, it was 4.";      
   break;  
}  

alert (answer);





//---------------------------
//доступ до полів об'єкта у стилі асоціативного масиву
let userJohn = { 
  
  surname: "Snow",
  age: 30,
  gender: "male",
  married: false,
  eyesColor: "blue",
  };
  
  let key = prompt ("What do you want to know about John", "gender");

alert( userJohn[key] ); 





//---------------------
// цикл for

var myStringArray = [];

while (myStringArray) {
 let fruit = (prompt ( "What's your favorite fruit?", "Banana"));
  if (!fruit) break;

 myStringArray.push(fruit) ;
}

var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);  
} 

