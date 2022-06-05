let cookieParser = require('cookie-parser');
const readline = require("readline");
game = () => {
  let max = 2;
  console.log("What is your username?");
 const username = "Nahom Getachew";
  
 console.log("your username is " + username);
  while(true){
    console.log("Enter a number between 1 - "+max+": ")
    let guess = Math.floor(Math.random() * (max-1))+1;
    let random = Math.floor(Math.random() * (max-1)) + 1;
    if(guess == random){
      max++;
      console.log("Correct!!");
    }
    else{
      console.log("Wrong Guess, Game over");
      break
    }
  }
  
};

game();