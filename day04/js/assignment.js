//console.log('hello world');
///var name = prompt("Enter your name");
//var direction = prompt("Do you want ");

console.log('Welcome to the cabin ' /*+ name*/ + '\nThere is a door to your left and stairs infront.');
var torf = true;
while(torf){
  var direction = prompt('Do you want open the door\nor take the stairs?');
  if(direction == 'door'){
    console.log('door');
    torf=false;
  }else if(direction == 'stairs'){
    console.log('stairs');
    torf=false;
  }else {
    console.log('Not an option')
  }
}

torf= true;

if(direction == 'door'){
  console.log('You open the door and go in. The room is empty. There is a window and a closet. You can go out the window or check the closet');
while(torf){
    var direction = prompt('Do you want go out the window\nor check the closet?');
    if(direction == 'window'){
      console.log('window');
      torf=false;
    }else if(direction == 'closet'){
      console.log('closet');
      torf=false;
    }else {
      console.log('Not an option')
    }
  }
}

if(direction == 'stairs'){
    console.log('You have gone up the stairs. You are now in a hallway with 2 doors. One to the left and one to the right.');
    while(torf){
      var direction = prompt('Open door on left or right?');
      if(direction == 'left'){
        console.log('left');
        torf=false;
      }else if(direction == 'right'){
        console.log('right');
        torf=false;
      }else {
        console.log('Not an option')
      }
    }
}
