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
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// create a variable for conntext
// returning a drawing context, mpassing abunch of methods adn fucntions which allow sus to draw in 2d 

// 3 event listener evennts

// background
// c.fillStyle = '#7ba7da';
// c.fillRect(0, 0, 450, 300);
// c.stroke();
// c.fillStyle = '#eedc82';
// c.fillRect(0, 300, 450, 450);
// c.stroke();


// character();
// character();
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


// background


// variables for floor and jump height
// img
// character object
// function - show img
// set interval
    // sit annd  wait for ticks to happen, and pass funnction 
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
// canvas.width = 45
let img = new Image();
img.src = 'assets/char.png';
let img2 = new Image();
img2.src = 'assets/char-flipped.png';
let carrot = new Image();
carrot.src = 'assets/carrot.png';

tamaApp = {};

tamaApp.defaultLocationX = canvas.width * 0.5;
tamaApp.defaultLocationY = canvas.height * 0.5;
tamaApp.defaultStat = 100;

tamaApp.charStat = {
    location: {
        x: tamaApp.defaultLocation,
        y: tamaApp.defaultLocation
    },
    speedX: 2.5,
    speedY: 1.5,
    energy: tamaApp.defaultStat,
    cleanliness: tamaApp.defaultStat,
    fun: tamaApp.defaultStat
}

tamaApp.drawChar = function(x, y) {
    c.drawImage(img, x, y, img.width / 4, img.height / 4);
}
tamaApp.drawChar2 = function (x, y) {
    c.drawImage(img2, x, y, img.width / 4, img.height / 4);
}




// font
// x = 0
// y = 0

tamaApp.text = function() {
    c.font = "30px Arial";
    c.fillStyle = "grey";
    c.fillText("feed", 48, 430);
    c.fillText('play', 200, 430);
    c.fillText('clean', 338, 430);
}

tamaApp.statusBar = function() {
    c.fillRect(25, 10, 100, 10);
}

// on load functio
tamaApp.moveCharIdle = function() {
    // makes loop 
    requestAnimationFrame(tamaApp.moveCharIdle);
    // clear the drawigns made before the nenw drawinng
    c.clearRect(0, 30, 450, 370);
    // dar the cahracter in halfway thru
    tamaApp.drawChar(tamaApp.defaultLocationX, tamaApp.defaultLocationY);
    // create a speed for  the characer changing the x locations
    tamaApp.defaultLocationX += tamaApp.charStat.speedX;
    tamaApp.defaultLocationY += tamaApp.charStat.speedY;


    // so that the char doesnt go pas the canvas width
    if(tamaApp.defaultLocationX > 350 || tamaApp.defaultLocationX < 10) {
        // this makes the character go in the opp direction
        tamaApp.charStat.speedX = -tamaApp.charStat.speedX;
        
    }
    
    if (tamaApp.defaultLocationY > 250 || tamaApp.defaultLocationY < 40 ) {
        // this makes the character go in the opp direction
        tamaApp.charStat.speedY = -tamaApp.charStat.speedY;

    }

    if (tamaApp.charStat.speedX < 0) {
        c.clearRect(0, 30, 450, 370);
        tamaApp.drawChar2(tamaApp.defaultLocationX, tamaApp.defaultLocationY);
    }
        
    };


// tamaApp.moveCharFood() {

// }


    // x++;
    // console.log(tamaApp.defaultLocation);
    // console.log(x);




// c.translate(0, 0);


// c.drawImage(img, 10, 10);







$(function () {
    // tamaApp.drawChar(tamaApp.defaultLocation, tamaApp.defaultLocation );
    tamaApp.text();   
    tamaApp.statusBar();
    tamaApp.moveCharIdle();
    // tamaApp.moveChar();   
    // setInterval(tamaApp.drawChar(x, y), 3000);
    // console.log(drawChar());                                                                                                                                                                                                                                                                         
});

// draw in order -
// set in
// array 
