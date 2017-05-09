
//use array of images
//find random number between 0 - 20;
//output the corresponding image for the random numbers
//document.write('hello world');


var images = [ 'http://planetoftheweb.com/i/8ball/19.png', 'http://planetoftheweb.com/i/8ball/18.png',
               'http://planetoftheweb.com/i/8ball/17.png', 'http://planetoftheweb.com/i/8ball/16.png',
               'http://planetoftheweb.com/i/8ball/15.png', 'http://planetoftheweb.com/i/8ball/14.png',
               'http://planetoftheweb.com/i/8ball/13.png', 'http://planetoftheweb.com/i/8ball/12.png',
               'http://planetoftheweb.com/i/8ball/11.png', 'http://planetoftheweb.com/i/8ball/10.png',
               'http://planetoftheweb.com/i/8ball/9.png', 'http://planetoftheweb.com/i/8ball/8.png',
               'http://planetoftheweb.com/i/8ball/7.png', 'http://planetoftheweb.com/i/8ball/6.png',
               'http://planetoftheweb.com/i/8ball/5.png', 'http://planetoftheweb.com/i/8ball/4.png',
               'http://planetoftheweb.com/i/8ball/3.png', 'http://planetoftheweb.com/i/8ball/2.png',
               'http://planetoftheweb.com/i/8ball/1.png', 'http://planetoftheweb.com/i/8ball/0.png' ];


var num = Math.floor(Math.random()*20);
//console.log(num);
document.write('<img src="' + images[num] + '">');
