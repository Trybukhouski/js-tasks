// VARIABLES

// 1
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name;
name = 'John';
admin = name;
alert(admin);


// 2
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let ourPlanet = 'Earth';
let currentUser = 'John';

// 3
// Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).
// Would it be right to use upper case for birthday? For age? Or even for both?

// Answer:
// 1. yes
// 2. no




// DATA TYPES

// 1.
// What is the output of the script?

let name = "Ilya";
alert( `hello ${1}` );
// hello 1
alert( `hello ${"name"}` ); // ?
// hello name
alert( `hello ${name}` ); // ?
// hello Ilya




// BASIC OPERATORS, MATHS

// 1
// What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;
let c = ++a;
// Answer: 2
let d = b++;
// Answer: 1

// 2
// What are the values of a and x after the code below?

let a = 2;
let x = 1 + (a *= 2);
// Answer: 5

// 3
// What are results of these expressions?

"" + 1 + 0
// Answer: 10
"" - 1 + 0
// Answer: -1
true + false
// Answer: 1
6 / "3"
// Answer: 2
"2" * "3"
// Answer: 6
4 + 5 + "px"
// Answer: 9px
"$" + 4 + 5
// Answer: $45
"4" - 2
// Answer: 2
"4px" - 2
// Answer: NaN
"  -9  " + 5
// Answer: stroke >> '   -9   5'
"  -9  " - 5
// Answer: -14
null + 1
// Answer: 1
undefined + 1
// Answer: NaN
" \t \n" - 2
// Answer: -2

// 4
// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(+a + +b);




// COMPARISONS

// 1
// What will be the result for these expressions?

5 > 4
// Answer: true
"apple" > "pineapple"
// Answer: true
"2" > "12"
// Answer: false
undefined == null
// Answer: true
undefined === null
// Answer: false
null == "\n0\n"
// Answer: false
null === +"\n0\n"
// Answer: false





// IF ELSE

// 1.
// Will alert be shown?

if ("0") {
  alert( 'Hello' );
}
// Answer: yes, "0" is true

// 2
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let answer = 'dont know'
if (answer === 'ECMAScript') {
  console.log('Right!')
} else {
  console.log('You don’t know? ECMAScript!')
}

// 3
// https://javascript.info/task/sign

let answer = prompt('your number', '')
if (answer > 0) {
  alert(1);
} else if (answer < 0) {
  alert(-1)
} else {
  alert(0)
}

// 4
// https://javascript.info/task/rewrite-if-question

let result = (a + b < 4) ? 'Below' : 'Over';

// 5
// https://javascript.info/task/rewrite-if-else-question

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : ''

