// function simpleFunction(){
//   console.log(this);
// }
//
// simpleFunction();
//
// var btn = document.querySelector('button');
//
// btn.addEventListener('click', colorize);
//
// function colorize(e){
//   console.log(this);
//   console.log(e);
//   this.style.color = 'red';
// }

// Create Elements
var body = document.body;

var header = document.createElement('header'),
    nav = document.createElement('nav'),
    main = document.createElement('main'),
    article = document.createElement('article'),
    img = document.createElement('img'),
    aside = document.createElement('aside'),
    footer = document.createElement('footer');

var navUl =
'<ul>'+
  '<li>'+
    '<a href ="#">nav 01</a>'+
  '</li>'+
  '<li>'+
    '<a href ="#">nav 02</a>'+
  '</li>'+
  '<li>'+
    '<a href ="#">nav 03</a>'+
  '</li>'+
'</ul>"';
var linkName = 'google';
var navTemplateString = `
  <ul>
    <li>
      <a href="#">${linkName}</a>
    </li>
    <li>
      <a href="#">nav 12</a>
    </li>
    <li>
      <a href="#">nav 13</a>
    </li>
  </ul>

`

//nav.innerHTML = navUl;

nav.innerHTML = navTemplateString;
header.appendChild(nav);
article.textContent = 'stuff and things...'
article.id = 'mainArticle';
img.src = 'http://unsplash.it/100/65?image=200';
img.alt = 'Picture of a fuzzy cow';
img.setAttribute('width', '500');
article.appendChild(img);
main.appendChild(article);
aside.className = 'asideClass';
main.appendChild(aside);

// body.appendChild(header);
// body.appendChild(main);
// body.appendChild(footer);

body.append(footer, main, header); //not well supported

console.log(body);
