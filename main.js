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

// 3 event listener evennts

// background
// c.fillStyle = '#7ba7da';
// c.fillRect(0, 0, 450, 300);
// c.stroke();
// c.fillStyle = '#eedc82';
// c.fillRect(0, 300, 450, 450);
// c.stroke();

// font
c.font = "30px Arial";
c.fillStyle = "grey";
c.fillText("feed", 48 , 430);
c.fillText('play', 200, 430);
c.fillText('clean', 338, 430);

// sprite visual

// circle = {
//     location: {
//         x: canvas.width / 2,
//         y: canvas.height / 2
//     },
//     width: 120,
//     height: this.width,
//     style: {

//     }
// }

// let x = canvas.width / 2;
// let y = canvas.height / 2;



// function circleStyle() {
    // c.beginPath();
    // c.arc(circle.location.x, canvas.height / 2, circle.width / 2, 0, Math.PI * 2, false);
    // c.fillStyle = 'pink';
    // c.fill();
    // c.strokeStyle = 'pink';
    // c.stroke();
// }

// function circleAnimate() {
//     // creates loop for us try to make it 
//     requestAnimationFrame(circleAnimate);
//     c.clearRect(0, 0, 450, 450);
//     c.beginPath();
//     c.arc(x, y, circle.width / 2, 0, Math.PI * 2, false);
//     c.fillStyle = 'pink';
//     c.fill();
//     c.strokeStyle = 'pink';
//     c.stroke();
//     x += 1;
// }

// circleAnimate();
// circleStyle();



// circle();

// c.beginPath();
// c.fillRect(canvas.width / 2, 240, 50, 50);

let img = new Image(); 
img.src = 'assets/char.png';
c.drawImage(img, 0, 0);
// background

