console.log('hello world');
/*
for(var i = 0; i < 10; i++){
  console.log(i);
}

for(var i = 0; i<10; i+=2){
  console.log(i);
}

for(i = 0; i< 5; i++){
  console.log(i*2);
}



var i = 0;
while(i<10){
  console.log(i);
  i++;
}

var i = 990;
do{
  console.log(i);
  i++;
}
while(i<10);
*/

var jeeps = ['wrangler', 'cherokee', 'grand cherokee', 'compass', 'renegade', 'patriot x'];

//.forEach loop array
jeeps.forEach(function(item, index){
//  console.log(index + ' : ' + item);
});

// .forIn loop
var jeep = {
  make: 'jeep',
  model: 'wrangler',
  year: 2014,
  color: 'black',
  doors: 2
};

for(property in jeep){
  // console.log(property);
  // console.log(jeep[property]);
}

//  if else statements
var getTime = new Date().getHours();
if(getTime < 12){
  alert("Good morning!");
}
else
{
  // alert("Good day, or evening!");
}

// if, else if, else
var getTime = new Date().getHours();
if(getTime < 12){
  alert("Good morning!");
}
else if(getTime < 18){
  alert("Good afternoon!");
}
else {
  // alert("Good evening!");
}


// another if statements

for(var i = 0; i < 10; i++)
{
  if(i === 0){
    // console.log(i + ' is just 0');
  } else if(i % 2 === 0){
    // console.log(i + ' is even');
  } else{
    // console.log(i + ' is odd');
  }
}

// == vs ===

var num = 1;
var numString = '1';
console.log(num);
console.log(typeof(num));
console.log(numString);
console.log(typeof(numString));

// == checks for value
if(num == numString){
  console.log('one is one');
  } else {
    console.log('one is not one')
  }

// === checks for value and data type
if(num === numString){
  console.log('one is one');
  } else {
    console.log('one is not one')
  }

// other comparison operators
var num = 5;
if(num < 6){
  console.log('less than');
}else if (num > 6) {
  console.log('greater than');
}else if(num <= 12){
  console.log("less than or equal to");
}else if(num >= 12){
  console.log("greater than or equal to");
}else {
  console.log("other");
}
