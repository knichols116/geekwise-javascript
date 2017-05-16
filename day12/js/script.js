/**
*   CHALLENGE: --Grab Environment Variables
*       •Make a function call that passes in your 'env.json' and a function callback
*
*       •Write a function that will 'GET' a resonse from an API endpoint
*       •get URL
*       •Be sure to include the ability for a function callback that will process the data
*       •When the connection is loading, be sure to check IF the request is finished and the response is ready AND that the status is okay
**/

getReq('/env.json', setVars);

// getReq function here
function getReq(url, callback){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  // Watch for JS Promises!!!
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      callback(JSON.parse(req.responseText));
    }else{
      console.log('error', req.statusText);
    }
  }
  req.send(null);
}



/**
*   CODE-ALONG:
*       •We will write a JavaScript closure to capture the credentials in class
**/
function envVars(data){
  var root_url, img_url, v3auth;
  return{
    set_root_url: function(data){
      root_url = data;
    },
    set_img_url: function(data){
      img_url = data;
    },
    set_v3auth: function(data){
      v3auth = data;
    },
    get_root_url: function(){
      return root_url;
    },
    get_img_url: function(){
      return img_url;
    },
    get_v3auth: function(){
      return v3auth;
    }
  }
}


var myVars;

function setVars(envs){
  myVars = envVars(envs);
  myVars.set_root_url(envs.root_url);
  myVars.set_img_url(envs.img_url);
  myVars.set_v3auth(envs.v3auth);

  //console.log(myVars.get_root_url(), myVars.get_img_url(), myVars.get_v3auth());

  var test = 'https://api.themoviedb.org/3/movie/top_rated?api_key=6878886989b1485a2529a5c115745744&language=en-US&page=1';

  var topRatedMovies = myVars.get_root_url() + 'movie/top_rated?language=en-US&page=1&adult=false&api_key=' + myVars.get_v3auth();
  var popularMovies = myVars.get_root_url() + 'movie/popular?language=en-US&page=1&adult=false&api_key=' + myVars.get_v3auth();

  if(!localStorage.getItem('topRated')){
    getReq(topRatedMovies, topRated);
  }else{
    topRated(localStorage.getItem('topRated'));
  }
  if(!localStorage.getItem('popularMovies')){
    getReq(popularMovies, getMovies);
  }else{
    getMovies(localStorage.getItem('popularMovies'));
  }
    /**
    *   CODE-ALONG:
    *       •We will write the process of setting all the credentials in class
    *           -It will create separate URLs for the topRated movies and most popularMovies
    *           -It will check if objects already exist in localStorage.
    *           -If not:
    *               †Create a getReq passing in the URL and a function callback
    *           -If it does:
    *               †Get the respective JSON string from storage and call the function passing it in
    **/


    pageSetup();
}




function topRated(top){
  if(typeof top === 'object'){
    localStorage.setItem('topRated', JSON.stringify(top));
  }
  if(typeof top === 'string'){
    top = JSON.parse(top);
  }

  var randomMovie = Math.floor(Math.random()*top.results.length);
  var topMovie = top.results[randomMovie];
  //console.log(topMovie);
  //console.log(myVars.get_img_url(), topMovie.backdrop_path);

  var featured = document.querySelector('.featured'),
      poster = document.querySelector('.featured .poster'),
      title = document.querySelector('.featured .title');

  featured.style.backgroundImage = `linear-gradient(to right, hsla(0, 0%, 0%, .85) 35%, hsla(0, 0%, 0%, 0)),url(${myVars.get_img_url()}original${topMovie.backdrop_path})`;
  poster.src = `${myVars.get_img_url()}w342${topMovie.poster_path}`;
  title.innerHTML = `${topMovie.original_title}`;
    /**
    *   CODE-ALONG:
    *       •We will write the code to populate the featured topRated movie section
    *           -It will check if it's an object or a string
    *           -It will randomly select a featured movie from the results array
    *           -It will also:
    *               †Set the background-image of the .featured element
    *               †Set the source of the .poster element
    *               †Set the innerHTML of the .title element
    **/
}

function getMovies(movies){

    if(typeof movies === 'object' ){
      localStorage.setItem('popularMovies', JSON.stringify(movies));
    }else if(typeof movies === 'string'){
      movies = JSON.parse(movies);
    }
    var swiper = document.querySelector('.swiper-wrapper');
    swiper.innerHTML= "";

    for(let i = 0; i < movies.results.length; i++){
      var movieFigure = document.createElement('figure');
      movieFigure.innerHTML = `<figcaption>
            <div class="thumbMeta">
                <h1>${movies.results[i].original_title}</h1>
                <div><progress max="100" value="80"></progress> <span>23 of 151m</span></div>
            </div>
            <div class="thumbRate">
                <button><i class="fa fa-thumbs-o-up"></i></button> <button><i class="fa fa-thumbs-o-down"></i></button> <button><i class="fa fa-plus"></i></button>
            </div>
            </figcaption>`
        movieFigure.classList.add('swiper-slide');
        movieFigure.dataset.id = movies.results[i].id;
        swiper.append(movieFigure);
        movieFigure.style.backgroundImage = `url(${myVars.get_img_url()}original${movies.results[i].backdrop_path})`;

    }
    /**
    *   CHALLENGE: --Get Movies
    *       •Check if movies parameter is an object or string.
    *           -If it's an object: set the localstorage key 'popularMovies' and stringify as the value
    *           -If it's a string: parse the return and set the value of the parameter as the object
    *       •Target the .swiper-wrapper element in the HTML
    *       •Set the .swiper-wrapper innerHTML to ''
    *       •Loop through each of the movies objects results
    *       •For each result:
    *           -Create a <figure> element
    *           -Set the <figure> innerHTML using the markup below
    *           -Add a classname 'swiper-slide' to each <figure>
    *           -Set the dataset.id of each <figure> to the movies ID
    *           -Set the background-image of each <figure> to the movies BACKDROP_PATH
    *           -Append the completed <figure> to the .swiper-wrapper
    *       •Here is the necessary markup:
                <figcaption>
                    <div class="thumbMeta">
                        <h1>[[Movie Title]]</h1>
                        <div><progress max="100" value="80"></progress> <span>23 of 151m</span></div>
                    </div>
                    <div class="thumbRate">
                        <button><i class="fa fa-thumbs-o-up"></i></button> <button><i class="fa fa-thumbs-o-down"></i></button> <button><i class="fa fa-plus"></i></button>
                    </div>
                </figcaption>
    **/

    setupSwipers();
}


function getMovieDetail(movie){
  var movieDetail = document.querySelector('#detail');
  movieDetail.style.backgroundImage = `url(${myVars.get_img_url()}original${movie.backdrop_path})`
  movieDetail.classList.add('active');
  movieDetail.innerHTML = `<div>
      <h1>${movie.title}</h1>
      <p><small>${movie.tagline}</small></p>
      <div class="activeInfo"><span>83% Match</span> <span>${movie.release_date.substr(0, 4)}</span> <span>PG-13</span> <span>2h 31m</span></div>
      <div class="activeMeta"><progress max="100" value="80"></progress> <span>23 of 151m</span></div>
      <p>${movie.overview}</p>
      <div class="activeRate"><button><i class="fa fa-plus"></i></button> MY LIST <button><i class="fa fa-thumbs-o-up"></i></button> <button><i class="fa fa-thumbs-o-down"></i></button></div>
  </div>
  <button class="selectionPlay"><i class="fa fa-play"></i></button>
  <button class="selectionClose"><i class="fa fa-times"></i></button>`
  var btnClose = document.querySelector('.selectionClose');
  btnClose.addEventListener('click', function(e){
    movieDetail.innerHTML = '';
    movieDetail.classList.remove('active');
  });
}
/**
*   CHALLENGE: --Movie Detail
*       •Write a function getMovieDetail that will process the object and output a detailed description of the selected movie
*       •Target the #detail element in the HTML.
*       •Notice the Release Year... the api output is MM-DD-YYYY. You'll need to format that to just the year
*       •You'll need to apply the background-image to the #detail element
*       •A class of 'active' will need to be added to the #detail element
*       •The innerHTML of the #detail element will be added using the markup below
*       •Add an event listener to the button.selectionClose element
*       •On click set #detail innerHTML to ''
*       •And set the #detail classname to ''
*       •Here is the necessary markup:
            <div>
                <h1>[[Movie Title]]</h1>
                <p><small>[[Movie Tagline]]</small></p>
                <div class="activeInfo"><span>83% Match</span> <span>[[Release Year]]</span> <span>PG-13</span> <span>2h 31m</span></div>
                <div class="activeMeta"><progress max="100" value="80"></progress> <span>23 of 151m</span></div>
                <p>[[Movie Overview]]</p>
                <div class="activeRate"><button><i class="fa fa-plus"></i></button> MY LIST <button><i class="fa fa-thumbs-o-up"></i></button> <button><i class="fa fa-thumbs-o-down"></i></button></div>
            </div>
            <button class="selectionPlay"><i class="fa fa-play"></i></button>
            <button class="selectionClose"><i class="fa fa-times"></i></button>
**/

// getMovieDetail function here

function pageSetup(){
    var searchForm = document.querySelector('form'),
        search = document.querySelector('form input[type="search"]'),
        searchSubmit = document.querySelector('form input[type="submit"]');

    searchForm.addEventListener('submit', function(evt){
        evt.preventDefault();
        search.value = '';
        searchForm.className = '';
    });

    searchForm.addEventListener('click', function(evt){
        evt.preventDefault();
        searchForm.className = 'searchOpen';
    });
}
pageSetup(); // <-- To be deleted on completion

var mySwiper = new Swiper ('.swiper-container', {
    // Options
    direction: 'horizontal',
    loop: false,
    width: 250,
    height: 150,
    spaceBetween: 4,
    speed: 500,
    slidesPerView: 'auto',
    slidesPerGroup: 4,
    slidesOffsetBefore: 56,
    slidesOffsetAfter: 56,
    grabCursor: true,
    breakpoints: {
        640: {slidesPerGroup: 1},
        976: {slidesPerGroup: 2}
    },
    CSSWidthAndHeight: true,
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var hoverIntent;

function setupSwipers(){
    var allSwipers = document.querySelector('.swiper-wrapper');

    allSwipers.childNodes.forEach(function(e){
        e.addEventListener('mouseenter', function(e){
            hover = setTimeout(function(){
              e.target.classList.add('hovered');
              if(e.target.previousElementSibling){
                e.target.previousElementSibling.classList.add('prev-hovered');
              }
              if(e.target.nextSibling){
                e.target.nextSibling.classList.add('next-hovered');
              }
            }, 500);
        });

        e.addEventListener('mouseleave', function(e){
            //console.log(e.target);
            clearTimeout(hover);
            e.target.classList.remove('hovered');
            if(e.target.previousElementSibling){
              e.target.previousElementSibling.classList.remove('prev-hovered');
            }
            if(e.target.nextSibling){
              e.target.nextSibling.classList.remove('next-hovered');
            }
        });

        e.addEventListener('click', function(e){
          //console.log(this.dataset.id);
          var movie = myVars.get_root_url() + 'movie/'+this.dataset.id+'?language=en-US&&api_key=' + myVars.get_v3auth();
          getReq(movie, getMovieDetail);
          //getMovieDetail = callback;
        });
        /**
        *   CHALLENGE: --Event Listeners
        *       •One event listener for mouseenter
        *       •Utilize a hover-intent technique. On enter and if user hovers over a movie for more than 500ms:
        *           -Add a classname of 'hovered'
        *           -If there is a previous sibling... add a class of 'prev-hovered'
        *           -If there is a next sibling... add a class of 'next-hovered'
        *
        *       •One event listener for mouseleave
        *       •If user leaves before 500ms:
        *           -clear the timer
        *           -If there is a previous sibling... remove the class of 'prev-hovered'
        *           -If there is a next sibling... remove the class of 'next-hovered'
        *
        *       •One event listener for click
        *       •Set a new URL for the movie clicked. Use the movie ID dataset.
        *       •Call the getReq function passing in the URL and the getMovieDetail function callback
        **/
    });

    mySwiper.update(true);
}

/**
*   CHALLENGE: --Tidy Up
*       •Refactor any JavaScript that you see could be cleaned up
*       •Wrap all the code in an IIFE to protect all of your global variables
**/
