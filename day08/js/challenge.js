var body = document.body;

// var div = document.createElement('div'),
//     img = document.createElement('img'),
//     h1 = document.createElement('h1'),
//     p = document.createElement('p');
//     a = document.createElement('a');
//
// img.src = 'http://unsplash.it/200/200?image=66';
// div.appendChild(img);
//
// h1.textContent= 'First Last';
// div.appendChild(h1);
//
// p.textContent= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quaerat tenetur maiores molestias laboriosam nam qui';
// div.appendChild(p);
//
// a.href = '#';
// a.textContent = 'more...';
// div.appendChild(a);

// body.appendChild(div);

var div = document.createElement('div'),
    form = document.createElement('form'),
    labelName = document.createElement('label'),
    labelPassword = document.createElement('label'),
    inputName = document.createElement('input'),
    inputPassword = document.createElement('input'),
    btn = document.createElement('input');

labelName.textContent = 'Username: ';
labelPassword.textContent = 'Password: ';

inputName.type = 'text';
inputName.placeholder = 'username';

inputPassword.type = 'password';
inputPassword.placeholder = 'password';

btn.type = 'submit';
btn.value = 'Submit';

form.appendChild(labelName);
form.appendChild(inputName);
form.appendChild(labelPassword);
form.appendChild(inputPassword);
form.appendChild(btn);
div.appendChild(form);
body.appendChild(div);


btn.addEventListener('click', function(e){
  e.preventDefault()
  div.remove();
});

getElementsByTagName('a').addEventListener('click', function(e){
  e.preventDefault();
  body.appendChild(div);
});
