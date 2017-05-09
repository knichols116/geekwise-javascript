// javascript1.matthewhigley.com
// console.log('hello world');

//ternary statements

// var age = prompt('How old are you?');

/*
if (age >= 18){
console.log('Old enough');
}else{
console.log('Too young');
}
*/
//!!!!!!!! DOES SAME AS ABOVE!!!!!!!!!!
// ternary operator syntax is exp ? ifTrue : ifFalse;
// var movieRestriction = age >= 18 ?
  // console.log('Old enough') :
  // console.log('Too young');

//
//
// var age = prompt('how old are you?');
//
// var url = age >= 18 ?
//   (
//     alert('okay, you may proceed'),
//     //last thing gets sent to variable
//     'proceed.html'
//   ) :
//   (
//     alert('sorry, you\'re not old enough for rated R movies'),
//     'stop.html'
//   );
//
//   window.location.assign(url);

// Switch statement
//
// var today = new Date().getDay();
//
// switch(today){
//   case 0:
//     console.log("Happy Sunday!");
//     break;
//   case 1:
//     console.log("Sounds like a case of the Mondays");
//     break;
//   case 2:
//     console.log("Tuesday Morning");
//     break;
//   case 3:
//     console.log("Wednesday Afternoon");
//     break;
//   case 4:
//     console.log("Thusday is this day");
//     break;
//   case 5:
//     console.log("It's Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
// }
//
// switch(today){
//   case 1:
//     console.log("It's Monday");
//     break;
//   default:
//     console.log("It's not Monday");
// }
//
// var coffee = 'Dutch Bros';
//
// function myCoffee(){
//   var coffee = 'Starbucks';
//   console.log(coffee);
//   coffee = 'Peets';
//   console.log(coffee);
//
//   otherCoffee = 'Dunkin';
// }
//
// myCoffee();
// console.log(coffee);
// console.log(otherCoffee);

/*!!!!!!!!!!!!!!!!!
    var is function scope
    let is block scope
    !!!!!!!!!!!!!!!!!!!*/

//
// for(let i = 0; i < 5; i++){
// //   console.log(i);
// // }
// // console.log(i);
// let coffee = 'Starbucks';
// let coffee = 'Lanna';
// function myCoffee(){
//   let coffee = 'Dutch Bros';
//   console.log(coffee);
// }
// myCoffee();
// console.log(coffee);
//
// // const
//
// const newCoffee = 'Lanna';

// Variable Hoisting

//
// console.log(x);
// console.log(y);
// console.log(z);
//
// var x = 1;
// let y = 2;
// const z = 3;


function myCoffee(){
  console.log('coffee');
  myDog();
}

function myDog(){
  console.log('dog');
}

myCoffee();
