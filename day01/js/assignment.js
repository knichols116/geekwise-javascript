/*
1. In assignment.html, create boilerplate & link assignment.js
2. Ask for first name, last name, age, & a place
3. Ask user if place is correct
4. Create a popup messaging first & last name combined
5. log age
*/

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");
var place = prompt("Enter a place");
/*
      CAN DECLARE VARIABLES THIS WAY TOO

var firstName = prompt("What is your first name?"),
    lastName = prompt("What is your last name?"),
    age = prompt("What is your age?"),
    place = prompt("Enter a place");
*/
confirm("is " + place + " correct?");

alert("Hello " + firstName + " " + lastName);

// comma concatenates with space in console
console.log("age is", age);
