/*
Create in your assignment.html an unordered list containing three list items.
Every list item will contain one button element.
Each button will be labeled: First Name, Middle Name, Last Name respectively.
Apply some CSS styling using assignment.css if desired.
Inside assignment.js, target each of the button elements:
    The first using .getElementById()
    The second using .getElementsByTagName()
    The third using .querySelector()
Write a function that will capitalize the first letter of any string passed into it, and lowercase all remaining letters.
Add an event listener to each listening for a click event.
When the user clicks each of the buttons, prompt the user for the name as labeled on the button.
Once the user click on the "Last Name" button, it should automatically combine all the responses alerting the users complete name.
*/

var firstName, middleName, lastName;
var first = document.getElementById('btnFirstName');
var second = document.getElementsByTagName('button')[1];
var third = document.querySelector('.last');

first.addEventListener('click', function(){
  firstName = prompt('What is your first name?');
});

second.addEventListener('click', function(){
  middleName = prompt('What is your middle name?');
});

third.addEventListener('click', function(){
  lastName = prompt('What is your last name?');
  alert(modUserName(firstName) + ' ' + modUserName(middleName) + ' ' + modUserName(lastName));
});

function modUserName(name){
  return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
};
