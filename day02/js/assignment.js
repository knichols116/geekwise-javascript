/*
              //////NUMBER PROBLEMS///////
  1. Create a random number generator outputting a number between 1-100
  2. Create a random number generato outputting a number between 0-100

              ///////STRING PROBLEMS///////
  1. Prompt user for their first and last name
  2. Convert user response to modify string formatting
      capitalize first letter of both name and lowercase all
      remaining letters.
  ex. user input -> KorEY niCHolS
      console -> Korey Nichols
*/

var rand = Math.random();
rand = rand *100;

//1-100
console.log(Math.ceil(rand));

rand = Math.random();
//0-100
console.log(Math.round(rand));

rand = Math.random()*100;

var name = prompt('What is your name?');
//gets rid of spaces before and after name
name = name.trim();
//makes every character lower case
name = name.toLowerCase();
//puts everything before the first space in firstName
var firstName = name.substring(0, name.indexOf(' '));
//console.log(firstName);
//puts everything after the first space in lastName
var lastName = name.substring(name.indexOf(' '));
//gets rid of extra spaces that may have been left infront of the last name
lastName = lastName.trim();
//console.log(lastName);
//makes first character of each name uppercase
firstName = firstName.substring(0, 1).toUpperCase()+ firstName.substring(1);
lastName = lastName.substring(0, 1).toUpperCase() + lastName.substring(1);
//sends 'firstName' 'lastName' to log
console.log(firstName, lastName);

/*name = name.substring(0, 1).toUpperCase() + name.substring(1, name.indexOf(' ')+1) + name.substring(name.indexOf(' ') +
 1, name.indexOf(' ') + 2 ).toUpperCase() + name.substring(name.indexOf(' ')+2);
console.log(name);
*/
