

var arrUserList = [];

if(localStorage.getItem('users')){
  arrUserList = JSON.parse(localStorage.getItem('users'));
  outputUsers();
}

var newUserBtn = document.querySelector('nav button');
var createUserBtn = document.querySelector('nav form input[type="submit"]');
var newUserForm = document.querySelector('nav form');

function NewUser(fn, ln, un, avatar){
  this.firstname = fn;
  this.lastname = ln;
  this.username = un;
  this.avatar = avatar;
};

/*newUserBtn.addEventListener('click', function(){
  newUserForm.classList.toggle('hidden');
});
*/
var hoverIntent;

newUserBtn.addEventListener('mouseenter', function(){
  hoverIntent = setTimeout(function(){
    newUserForm.classList.remove('hidden');
  }, 500);
});

newUserBtn.addEventListener('mouseleave', function(){
  clearTimeout(hoverIntent);
  if(!newUserForm.addEventListener('mouseenter', function(){})){
    newUserForm.classList.add('hidden');
  }
});

createUserBtn.addEventListener('click', function(e){
  e.preventDefault();
  createUser(newUserForm.elements);
  newUserForm.reset();
  newUserForm.classList.add('hidden');
});

function createUser(f){
  arrUserList.push(new NewUser(f[0].value, f[1].value, f[2].value, genAvatar()));
  outputUsers();
  localStorage.setItem('users', JSON.stringify(arrUserList));

}

function outputUsers(){
  var userProfiles = document.getElementById('userProfiles');
  userProfiles.innerHTML = '';
  for(let i = 0; i < arrUserList.length; i++){
    var userLi = document.createElement('li'),
        userDiv = document.createElement('div'),
        userH1 = document.createElement('h1');
    userH1.textContent = arrUserList[i].username;
    userDiv.innerHTML = arrUserList[i].avatar;
    userLi.append(userDiv, userH1);
    userProfiles.append(userLi);
  }
}

function genAvatar(){
  var avatarBox = document.createElement('ul');
  var randColor = Math.floor(Math.random() *360);
  for(let i = 0; i< 16; i++){
    var avatarBlock = document.createElement('li');
    avatarBlock.style.backgroundColor = 'white';
    if(Math.floor(Math.random()*2)){
      //avatarBlock.style.backgroundColor = 'purple';
      avatarBlock.style.backgroundColor = `hsl(${randColor}, 50%, 50%)`;
    }
    avatarBox.append(avatarBlock);
  }
  return avatarBox.outerHTML;
}

/*console.log(createUserBtn);
var meObj = {
  firstname: 'korey',
  lastname: 'nichols',
  hair: 'brown',
  eyes: 'blue',
  talk: function(){
    alert('Hey from ' + this.firstname);
  }
};

console.log(meObj);

meObj.talk();

meObj.firstname = 'david';

meObj.talk();

function Person(first, last, age, eyes){
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyes = eyes;
  this.talk = function(salutation){
    alert(salutation + ', from ' + this.firstname);
  }
}

var me = new Person('korey', 'nichols', 29, 'blue')
console.log(me);
me.talk('greetings');

*/
