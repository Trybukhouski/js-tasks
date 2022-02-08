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
