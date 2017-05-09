var key = document.querySelector('.key'),
    h1 = document.querySelector('h1'),
    keyed = document.querySelector('.keyed');

// window.addEventListener('keypress', function(e){
//   e.preventDefault()
//   console.log(e);
// });

window.addEventListener('keydown', function(e){
  e.preventDefault()

  keyed.parentElement.classList.remove('hidden');
  key.classList.add('hidden');

  h1.textContent = e.keyCode;
  keyed.textContent = e.key;

  if(e.keyCode == 32){
    keyed.textContent = 'Spacebar';
  }
  console.log(e);
});
