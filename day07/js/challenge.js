var answer = document.querySelector('input');
var runBtn = document.querySelector('button');

runBtn.addEventListener('click', function(){
  //alphWords(answer.value);
  //revAlphWord(answer.value);
  //revAlphChar(answer.value);
});

function alphWords(userStr){
  console.log(userStr.split(' ').sort());
}

function revAlphWord(userStr){
  //log reversed user string
  var userStrArr = userStr.split(' ');
  var userStrRev = [];
  userStrArr.forEach(function(word){
    userStrRev.push(word.split('').sort().reverse().join(''))
  });
  console.log(userStrRev.sort().join(' '));
}

//reverse alphebetize each character in each word  ANSWER ABOVE
// order complete string alphebetized

/*function revAlphChar(userStr){
    var words = userStr.split(' ');
    var finalSentence;
    for (let i = 0; i < words.length; i++){
      finalSentence += words[i].split('').sort().reverse().join();
    }
    console.log(finalSentence);
}
*/

//background-color: hsl(0//mousecusor left/right, 50%, 50%);

window.addEventListener('mousemove', function(e){
  console.clear();
  console.log(e.x, e.y);
  console.log(this.innerHeight, this.innerWidth);
  var winW = this.innerWidth;
  var winH = this.innerHeight;
  var mouseX = e.x;
  var mouseY = e.y;
  console.log((mouseX/winW)*100);
  var hue = Math.round((mouseX/winW)*360);
  var perc = Math.round((mouseY/winH)*100);
  document.body.style.backgroundColor = 'hsl('+ hue + ', ' + perc + '%, '+ perc + '%)'
});


// ASSIGNMENT
  /*Recreate http://keycode.info
