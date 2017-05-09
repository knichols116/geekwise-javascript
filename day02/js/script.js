/*
// .length method
console.log("anystring".length);
var str = "anotherStringThisOneVeryLong";
console.log(str.length);

// .charAt()
console.log(str.charAt());
console.log(str.charAt(8));
console.log(str.charAt(203));

// .indexOf()
console.log(str.indexOf('t'));
console.log(str.indexOf('T'));

// .concat()
var hello = 'Hello';
console.log(hello.concat(' JavaScript'));
console.log(hello + ' JavaScript');
console.log(hello, "JavaScript");

// .substring(startIndex, endIndex)
var myName = 'KoreyNichols';
console.log(myName.substring(0, 3));
console.log(myName.substring(3, 6));
console.log(myName.substring(3));


// .substr(startIndex, numOfChar)
var myHome = 'FresnoYeah';
console.log(myHome.substr(0, 3));
console.log(myHome.substr(3, 2));
console.log(myHome.substr(3));

// .toLowerCase()
var myDog = 'Allie';
console.log(myDog.toLowerCase()); //allie


console.log(myDog.split("").reverse().join("")); //eillA

// .toUpperCase()
myDog = 'Callie';
console.log(myDog.toUpperCase()); //CALLIE

// .trim()
var extraSpaces= '      stuff       and things   ';
console.log(extraSpaces); //      stuff       and things
console.log(extraSpaces.trim()); //stuff       and things


// Number Methods
// Number.isInteger()
console.log(Number.isInteger(5)); //true
console.log(Number.isInteger(5.5)); //false
console.log(Number.isInteger(NaN)); //false

// Number.parseFloat()
console.log(Number.parseFloat('5.2')); //5.2
console.log(Number.parseFloat('365.1 degrees')); //365.1
console.log(Number.parseFloat('degrees 365.1')); //NaN

// Number.parseInt()
console.log(Number.parseInt('89')); //89
console.log(Number.parseInt('89.5')); //89
console.log(Number.parseInt('words words')); //NaN

//var userNum = parseInt(prompt('pick a number'));
//console.log(typeof userNum);


// Number.isNaN()
console.log(Number.isNaN(5));
console.log(Number.isNaN('matt'));
console.log(Number.isNaN(NaN));
console.log(isNaN('matt'));
console.log(isNaN(NaN));

var userNum = parseInt(prompt('pick a number'));
console.log(!Number.isNaN(userNum));


// Date Object
var newDate = new Date();
console.log(newDate);

// getDate() day of the month
console.log(newDate.getDate());

// getFullYear()
console.log(newDate.getFullYear());

// getDay() day of the week  !!zero based!!
console.log(newDate.getDay());

// getMonth() month of year  !!zero based!!
console.log(newDate.getMonth());
//
// if(newDate.getMonth() == 3)
//  {
//   console.log('April');
//  }

var fullMonth = newDate.toLocaleString('en-us', {weekday: 'short'});
console.log(fullMonth);

var fullYear = newDate.toLocaleString('en-us', {month: "long"}) + ' ' +
            newDate.toLocaleString('en-us', {day:'2-digit'}) + ', ' +
            newDate.getFullYear();
console.log(fullYear);
*/

// Math Object
/*
    + = addition
    - = subtraction
    * = multiplication
    / = division
    % = Modulus
    ++ = incrementor
    -- = decrementor

*/
// var x = 5;
// console.log(x);
// x--;
// console.log(x);
// x++;
// console.log(x)


var rand = Math.random(); //0-1
console.log(rand);

var roundUp = Math.ceil(8.3);
console.log(roundUp);

var roundDown = Math.floor(9.9);
console.log(roundDown);

var roundNum = Math.round(4.4999999);
console.log(roundNum);

roundNum = Math.round(4.5);
console.log(roundNum);

/*
  max(), min()
  pow(x, y)
  sqrt(x)
*/
