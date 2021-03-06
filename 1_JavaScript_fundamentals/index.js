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




// LOGICAL OPERATORS

// 1
// https://javascript.info/task/alert-null-2-undefined

// Answer: 2

// 2
// https://javascript.info/task/alert-or

// Answer: 1, then 2

// 3
// https://javascript.info/task/alert-1-null-2

// Answer: null

// 4
// https://javascript.info/task/alert-and

// Answer: 1, then undefined

// 5
// https://learn.javascript.ru/task/alert-and-or

// Answer: 3

// 6
// https://javascript.info/task/check-if-in-range

let age;
if (age >= 14 && age <= 90) return true;

// 7
// https://javascript.info/task/check-if-out-range

if (!(age >= 14) && !(age <= 90)) return true;
if (age < 14 && age > 90) return true;

// 8
// https://javascript.info/task/if-question

if (-1 || 0) alert( 'first' );
// Answer: - 1, yes
if (-1 && 0) alert( 'second' );
// Answer: 0, no
if (null || -1 && 1) alert( 'third' );
// Answer: 1, yes

// 9
// https://javascript.info/task/check-login

let login = prompt('Login', '');
if (login === 'Admin') {
  let pass = prompt('Password', '');
  switch (pass) {
    case 'TheMaster': 
      alert('Welcome!');
      break;
    case null:
      alert('Canceled');
      break;
    default:
      alert('Wrong password');
      break;
  }
} else if (login === '' || login === null) {
  alert('Canceled');
} else {
  alert('I don’t know you')
}




// WHILE AND FOR

// 1.
// https://javascript.info/task/loop-last-value

// Answer: 1

// 2
// https://learn.javascript.ru/task/which-value-while

// Answer:
// 1,2,3,4
// 1,2,3,4,5

// 3
// https://javascript.info/task/which-value-for

// Answer:
// 0,1,2,3,4
// 0,1,2,3,4

// 4
// https://javascript.info/task/for-even

for(let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 5
// https://javascript.info/task/replace-for-while

let i = 0;
while (i < 3) {
  alert( `number ${i}!`);
  i++;
}

// 6
// https://javascript.info/task/repeat-until-correct

let number = 0;
while (number <= 100 && number) {
  number = prompt('Your number', '');
}

// 7
// https://javascript.info/task/list-primes

let n = +prompt('your num', '');

next: 
for (let i = 2; i <= n; i++) {
  for(let ii = 2; ii < i; ii++) {
    if (i % ii === 0) continue next;
  }
  alert(i);
}




// SWITCH

// 1
// https://javascript.info/task/rewrite-switch-if-else

let browser = prompt('name', '');

if (browser === 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || 
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

// 2
// https://javascript.info/task/rewrite-if-switch

let a = +prompt('a?', '');

switch (a) {
  case 0: 
    alert(0);
    break;
  case 1: 
    alert(1);
    break;
  case 2:
  case 3: 
    alert('2,3');
    break;
}

// FUNCTIONS

// 1
// https://javascript.info/task/if-else-required

// Answer: have no differences

// 2
// https://javascript.info/task/rewrite-function-question-or

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// 3
// https://javascript.info/task/min

function min (a, b) {
  return a < b ? a : b;
}

// 4
// https://javascript.info/task/pow

let x = prompt('x =', '');
let n = prompt('n =', '')
function pow (x, n) {
  return x ** n;
}
if (n < 1) {
  alert('Sorry!')
} else {
  pow(x, n)
}




// ARROW FUNCTIONS

// 1
// https://javascript.info/task/rewrite-arrow

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);