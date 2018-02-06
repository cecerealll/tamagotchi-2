// game styling

// <canvas> for background and button styling animations?
// sprite for tamagotchi - can i make it? iunno
// home - basic deco
// run - background and obstacle design
// food - design, eating animation
// clean- design , cleaning animation
// *if have time, sound?
// *if have time, hatching animation



// tamagotchi game mechanics

// when not doing anything, cycle through several states
// tamagotchi object with energy, fun, cleanliness
// 3 buttons to feed, play and clean
// feed plays animation - increases energy bar 
    // bar depletes over time, faster if play
// clean plays animation - increases cleanliness bar
    // bar depeletes over time, faster if play
// play activates hurdle game - increases fun bar - the better the score the more fill on the bar
    // the obstacle moves to the left at a set range
    // as score moves past certain number, obstacle moves faster
    // tamagotchi middle button jumps  
        // gradually moves up and down as obstacle comes near
// left button to go back while in different modes (feed, play, clean)

// *if have time look into browser cacheing


// STEPS
// START WITH "HOME" STATUS
// get the idle screen working 
// get 3 buttons working

// $('h2').on('click', function() {
//     console.log('h2');
// });

// canvas tutorial
// create variable
// query selector selects html element
var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// create a variable for conntext
// returning a drawing context, mpassing abunch of methods adn fucntions which allow sus to draw in 2d 
var c = canvas.getContext('2d');

// .fillRect takes 4 values, x, y, width, height x y relative from top left of canvas
c.fillRect(100, 100, 100, 100);
// console.log(canvas);


