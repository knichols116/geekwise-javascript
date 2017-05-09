var meObj = {
  firstName: 'korey',
  lastName: 'nichols',
  hair: 'brown',
  eyes: 'blue',
  height: 6,
  talk: function(){
    console.log('hello my name is ' + this.firstName + ', and my eyes are '+ this.eyes);
  }
};

meObj.eyes = 'brown';


function Person(first, last, age, eye){
  this.firstName = first;
  this.lastName = last;
  this.userage = age;
  this.eyes = eye;
}

var myFather = new Person('John', 'Doe', 45, 'blue');
console.log(myFather);

var myMother = new Person('Jane', 'Doe', 39, 'green');
console.log(myMother);
