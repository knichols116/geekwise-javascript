/*console.log("hello world");

// Named function declaration
function myName(){
  // all my cool code
  console.log('not cool');
}
// function call
myName();


// Anonymous function
function() {
  //stuff and things

}


// Function Expression
var myName = function(){
  console.log('hello from the other side');
}();// open/close parenthesis call on same line or call function like earlier

// Immediately Invoked Funtions Expression (IIFE)

(function () {
    alert('this will run IMMEDIATELY!!!');
}());

//---------------------test recurstion-----------------//
var x = 3;
var y = 4;
var sum = multRecur(x, y);

function multRecur(x, y){
  if(y == 1){
    return x;
  }
  else {
    return multRecur(x, y-1)+ x;
  }
}
console.log(sum);
function myName(firstName, lastName){
 console.log(firstName + ' ' + lastName);
}
myName('Korey', 'Nichols');


//write a function that accepts a number
//log number *5

function timesByFive(x){
  console.log(x*5);
}
timesByFive(prompt('Enter a number'));


var myName = function() {
  //console.log(arguments[0] + ' ' + arguments[4]);
  // for(let i = 0; i < arguments.length; i++)
  // {
  //   console.log(arguments[i]);
  // }
  for(argument in arguments) {
    console.log(arguments[argument]);
  }
};
myName('Korey', [1, 2, 3, 4, 5], false, 'red', 'Nichols', 1, 29);


// return statement

var myName = getName('Nichols');

console.log(myName);

function getName(lastname){
  return 'Korey ' + lastname;
}


//create a var and call birthplace
//both city and state
//write birthplace function expecting 2 things
//return one

function birthplace(city, state){
  return city + ', ' + state;
}

var place = birthplace(prompt('What city were you born in?'),
                       prompt('What state were you born in?'));
console.log(place);


var userName = modUserName(prompt('What is your name?'));
var lastName = modUserName(prompt('What is your last name?'));
//var cappedUserName = userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();

//console.log(cappedUserName);

function modUserName(name){
  return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
}

console.log(userName + ' ' + lastName);
*/

// DOM Manipulation
// .getElementById()
/*
var btn = document.getElementById('myBtn');

console.log(btn);

// .getElementsByTagName()

var links = document.getElementsByTagName('a');

console.log(links);

// .getElementsByClassName
var dropdownLinks = document.getElementsByClassName('dropdown');

console.log(dropdownLinks);

// .querySelector()
//grabs first class if multiple classes with same name
var turkey = document.querySelector('#turkey')

console.log(turkey);

var oneLink = document.querySelector('ul li:last-child a');//gets last li in the first ul
console.log(oneLink);

// .querySelectorAll()

var allDropdowns = document.querySelectorAll('.dropdown');
console.log(allDropdowns);

var allSublinks = document.querySelectorAll('ul li li a');
console.log(allSublinks);
*/

//.addEventListener()
// var btn = document.getElementById('myBtn');
//
// // click event
// // btn.addEventListener('click', function(){
// //   btn.style.backgroundColor = 'red';
// // });
//
//
// // mousedown
// btn.addEventListener('mousedown', function(){
//   btn.style.backgroundColor = 'green';
// });
//
// // mouseup
// btn.addEventListener('mouseup', function(){
//   btn.style.backgroundColor = 'blue';
// });
//
// //mousemove
// window.addEventListener('mousemove', function(e){
//   //console.log(e);
//   //console.clear();
//   //console.log(e.screenX + ':' + e.screenY);
// });

// mouseenter
var btn = document.querySelector('#myBtn');
btn.addEventListener('mouseenter', function(){
  btn.style.fontSize = '2em';
  btn.style.color = 'white';
  btn.style.backgroundColor = 'black';
});

// mouseleave
btn.addEventListener('mouseleave', function(){
  btn.style.fontSize = '1em';
  btn.style.color = 'black';
  btn.style.backgroundColor = 'gray';
});

// scroll
// window.addEventListener('scroll', function(e){
//   console.log(e);
// });

// // keypress
// window.addEventListener('keypress', function(e){
//   console.log(e);
// });


// keydown
window.addEventListener('keydown', function(e){
  //console.log(e);
});

// keyup
window.addEventListener('keyup', function(e){
  console.log(e);
});
