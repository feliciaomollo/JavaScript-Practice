// Control flow statements

const age = 60;

if (age >= 60){
    console.log ("You're old");
}else{
    console.log ("You're Young");
}

//switch statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the workweek.");
        break;
    default:
        console.log("It's a regular day.");
}

let year = prompt("The current year is:", "")

if (year == 2025){
    alert("You're right")
}else {
    alert("Better luck next year, buddy!")
}

let year = prompt('In which year was the bible published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

//CONDITIONAL OPERATOR ?
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

//redone to allow conditional statement ?
let accessAllowed = (age>18) ? True : false;


let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );