/*
    Listen for a NewUser click
*/
var userArr = [];
var newUser = document.querySelector('nav button');
var newUserForm = document.querySelector('nav form');

newUser.addEventListener('click', function(){
  newUserForm.classList.toggle('hidden');
  // newUserForm.reset();
});


/*
  Listen for a CreateUser click
*/

var newUserBtn = document.querySelector('nav form input[type="submit"]');
newUserBtn.addEventListener('click', function(e){
  e.preventDefault();
  //var user1 = new NewUserObj('name', 'name', 'name')
  createUser(newUserForm.children);
  newUserForm.classList.toggle('hidden');
  newUserForm.reset();
});

function NewUserObj(fn, ln, un, av){
  this.firstname = fn;
  this.lastname = ln;
  this.username = un;
  this.avatar = av;
}

function createUser(obj){
  userArr.push(new NewUserObj(obj[0].value, obj[1].value, obj[2].value, makeAvatar()));
  outputUsers();
}

//document.body.style.backgroundColor = 'hsl('+ hue + ', ' + perc + '%, '+ perc + '%)'

function makeAvatar(){
    var avatarBox = document.createElement('ul');
    for(let i = 0; i < 16; i++){
      var avatarBlock = document.createElement('li');
      /*avatarBlock.style.backgroundColor = 'white';
      if(Math.floor(Math.random() * 2)){
        avatarBlock.style.backgroundColor = 'green';
      }*/
      //avatarBlock.style.backgroundColor = 'hsl('+ Math.floor(Math.random()*360) + ', ' + Math.floor(Math.random()*100) + '%, '+ Math.floor(Math.random()*100) + '%)';
      avatarBlock.style.backgroundColor = 'rgb('+ Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', '+ Math.floor(Math.random()*255) + ')';

      avatarBox.append(avatarBlock);
    }
    return avatarBox.outerHTML;
}

function outputUsers(){
  var userProfiles = document.getElementById('userProfiles');
  userProfiles.innerHTML = '';
  for(let i = 0; i < userArr.length; i++)
  {
    var userLi = document.createElement('li'),
        userH1 = document.createElement('h1'),
        userDiv = document.createElement('div');

    userH1.textContent = userArr[i].username;
    userDiv.innerHTML = userArr[i].avatar;
    userLi.append(userDiv, userH1);
    userProfiles.append(userLi);
  }
}

//add random color genertation to the avatar
