// console.log(document.querySelector('input'));

//2 add 3 sub 4 mult 5 div
/*
document.getElementsByTagName('input')[2].addEventListener('click', function(){
  let sum =Number(document.getElementsByTagName('input')[0].value) + Number(document.getElementsByTagName('input')[1].value)
  alert(sum);
});

document.getElementsByTagName('input')[3].addEventListener('click', function(){
  let sum =Number(document.getElementsByTagName('input')[0].value) - Number(document.getElementsByTagName('input')[1].value)
  alert(sum);
});
document.getElementsByTagName('input')[4].addEventListener('click', function(){
  let sum =Number(document.getElementsByTagName('input')[0].value) * Number(document.getElementsByTagName('input')[1].value)
  alert(sum);
});
document.getElementsByTagName('input')[5].addEventListener('click', function(){
  let sum =Number(document.getElementsByTagName('input')[0].value) / Number(document.getElementsByTagName('input')[1].value)
  alert(sum);
});


today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25)
{
cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day=1000*60*60*24;
document.getElementsByTagName('input')[6].value = Math.ceil((cmas.getTime()-today.getTime())/(one_day));



// F = C*9/5 + 32
// C = (F-32)*5/9

document.getElementsByTagName('input')[11].addEventListener('click', function(e){
  e.preventDefault();
  let degrees = Number(document.getElementsByTagName('input')[7].value)
  if(document.getElementById('celsius').checked){
      document.getElementsByTagName('input')[10].value = degrees*9/5 +32;
    }
    else {
      document.getElementsByTagName('input')[10].value = (degrees-32)*5/9;
    }
})
*/

var xmasForm = document.getElementById('xmas');
var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth() == 11 && today.getDate() > 25){
  xmas.setFullYear(xmas.getFullYear() + 1);
}

var oneDay = 1000*60*60*24;

xmasForm.children[0].value = Math.ceil((xmas.getTime() - today.getTime()) / oneDay);


var val1 = document.querySelector('input[name="val1"]');
var val2 = document.querySelector('input[name="val2"]');
var calcVals = document.getElementById('calcVals');

for(let i = 0; i < calcVals.children.length; i++){
  calcVals.children[i].addEventListener('click', doCalc);
}

function doCalc(e){
  e.preventDefault();

  switch(this.name){
    case '+':
      alert(parseInt(val1.value) + parseInt(val2.value));
      break;
    case '-':
      alert(parseInt(val1.value) - parseInt(val2.value));
      break;
    case '*':
      alert(parseInt(val1.value) * parseInt(val2.value));
      break;
    case '/':
      alert(parseInt(val1.value) / parseInt(val2.value));
      break;
  }
}

var temp = document.querySelector('#temp .convert input[type="text"]');
var tempCon = document.querySelector('#temp .converted input');
var tempBtn = document.querySelector('#temp input[type="submit"]');
var tempUnit = document.querySelectorAll('#temp input[type="radio"]');

tempBtn.addEventListener('click', function(e){
  e.prevnetDefault();

  var userUnit;

  tempUnit.forEach(function(el){
    if(el.checked){
      userUnit = el.value;
    }
  });

  if(userUnit === 'F'){
    tempCon.value = (5/9)*(userTemp -32);
  }
  if(userUnit === 'C'){
    tempCon.value = userTemp * 9/5 + 32;
  }

});
