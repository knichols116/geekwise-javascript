/*
console.log("hello world");

// array declaration
var colors = ['red', 'orange', 'blue', 'green', 'yellow', 'pink'];

// logs out full array
console.log(colors);

// access element by index
console.log(colors[1]);

// .length
console.log(colors.length);

var lastColor = colors[colors.length - 1];
console.log(lastColor);

// .forEach()
colors.forEach(function(item, index){
  console.log(index + ' : ' + item);
});

// .isArray()
var trueOrFalse = Array.isArray(['red', 'blue', 'orange']);
console.log(trueOrFalse);

trueOrFalse = Array.isArray('hello');
console.log(trueOrFalse);

trueOrFalse = Array.isArray(colors);
console.log(trueOrFalse);

var oneItemArray = ['one'];
console.log(Array.isArray(oneItemArray));

// .push()
oneItemArray.push('two');
console.log(oneItemArray);

oneItemArray.push(3);
console.log(oneItemArray);

// .pop()
oneItemArray.pop();
console.log(oneItemArray);

var returnedVar = oneItemArray.pop();
console.log(returnedVar);

// .unshift()
colors.unshift('greenish');
console.log(colors);

// .shift()
colors.shift();
console.log(colors);

var shiftedColor = colors.shift();
console.log(shiftedColor);
console.log(colors);

// .indexOf()
var colorPosition = colors.indexOf('blue');
console.log(colorPosition);

// .lastIndexOf()
colors.push('green', 'violet', 'blue', 'pink');
console.log(colors);

var lastBlue = colors.lastIndexOf('blue');
console.log(lastBlue);

//removing items from array using splice
// .splice()  (index of starting item, how many removed)
console.log(colors);
var removeItem = colors.splice(2, 1);
console.log(colors);
console.log(removeItem);

var removeItems = colors.splice(3, 2);
console.log(colors);
console.log(removeItems);

//adding items to an arry using .splice(start index, # remove, what to add)
var addItems = colors.splice(1, 0, 'orange', 'yellow', 'green');
console.log(colors);
console.log(addItems);

//removing and adding to array using .splice()
var removeAndAdd = colors.splice(5, 1, 'purply');
console.log(colors);
console.log(removeAndAdd);



// EXERCISE
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// Assume you dont know the index position of 'green'
// Remove 'green' and 'blue'
// Replace with 'indigo'
console.log(colors);
var removedColors = colors.splice(colors.indexOf('green'), 2, 'indigo');
console.log(colors);
console.log(removedColors);


// .slice()       (firstIndex, lastIndex[NOT INCLUDED]) simular to substring
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

console.log(colors);
var newColors = colors.slice();
console.log(colors);
console.log(newColors);

var colorSlice = colors.slice(4, 5);
console.log(colorSlice);

// .reverse()
console.log(colors);
var reversed = colors.reverse();
console.log(reversed);
console.log(colors);

// .sort()   alphanumeric sorting  (numbers, upperCase, lowerCase)

var numbers = [1, 20, 10, 2, 01, 22, 3, 4.333 , 4, 42, .222, 1234, 'five', 'fiv34'];
console.log(numbers);
var sorted = numbers.sort();
console.log(sorted);

var words = ['word', 'Word', '1 Word', '2 Words', 'apple', 2];
console.log(words.sort());

// comparison sorting
var numbers = [2, 4, 5, 1, 3, 123];
numbers.sort(function(a, b){
  return a-b;
});
console.log(numbers);


var str = 'osSE5Gu0Vi8WRq93UvkYZCjaOKeNJfTyH6tzDQbxFm4M1ndXIPh27wBA rLclpg';

var numbers = [3, 35, 27, 62, 51, 27, 46, 57, 26, 10, 46, 63, 57, 45, 15, 43, 53];

for(i = 0; i<numbers.length; i++)
{
console.log(str.charAt(numbers[i]-1));

}
*/
