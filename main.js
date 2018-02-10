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
let brush = new Image();
brush.src = 'assets/hairbrush.png';

tama = {};

tama.defaultLocationX = canvas.width * 0.4;
tama.defaultLocationY = canvas.height * 0.4;
tama.defaultStat = 100;
tama.foodLocX = 100;
tama.foodLocY = 150;
tama.objLocX = 100;
tama.objLocY = 150;

tama.charStat = {
    location: {
        x: tama.defaultLocationX,
        y: tama.defaultLocationY
    },
    move: function(x, y) {
        this.location.x = this.location.x + x;
        this.location.y = this.location.y + y;
    },
    
    width: img.width / 4,
    height: img.height / 4,
    speedX: 2.8,
    speedY: 1.2,
    energy: tama.defaultStat,
    cleanliness: tama.defaultStat,
    fun: tama.defaultStat
}

tama.drawChar = function(x, y, w, h) {
    c.drawImage(img, x, y, w, h);
}
// tama.drawCharRot = function (rad) {
//     c.drawImage(img, tama.defaultLocationX, tama.defaultLocationY, img.width / 4, img.height / 4);
//     // c.translate(canvas.width, canvas.height)
//     c.rotate(rad);
// }
tama.drawChar2 = function (x, y, w, h) {
    c.drawImage(img2, x, y, w, h);
}
tama.drawFood = function(x, y) {
    c.drawImage(carrot, x, y, img.width / 6, img.height / 6);
}
tama.drawBrush = function(x,y) {
    c.drawImage(brush, x, y, img.width / 5, img.height / 5);    
}




// font
// x = 0
// y = 0

tama.text = function() {
    c.font = "30px Arial";
    c.fillStyle = "grey";
    c.fillText("feed", 48, 430);
    c.fillText('play', 195, 430);
    c.fillText('clean', 338, 430);
}

tama.statusBar = function() {
    c.fillRect(25, 10, 100, 10);
    c.fillRect(25+100+50, 10, 100, 10);
    c.fillRect(25+100+50+100+50, 10, 100, 10);
}


// on load functio
tama.moveCharIdle = function() {
    // makes loop 
    tama.frameId = requestAnimationFrame(tama.moveCharIdle);
    // clear the drawigns made before the nenw drawinng
    c.clearRect(0, 30, canvas.width, canvas.height);
    // draw the cahracter in halfway thru
    tama.drawChar(tama.defaultLocationX, tama.defaultLocationY, img.width / 4, img.height / 4);
    // create a speed for  the characer changing the x locations
    tama.defaultLocationX += tama.charStat.speedX;
    tama.defaultLocationY += tama.charStat.speedY;
    tama.text();
    tama.statusBar();


    // so that the char doesnt go pas the canvas width
    if(tama.defaultLocationX > 350 || tama.defaultLocationX < 10) {
        // this makes the character go in the opp direction
        tama.charStat.speedX = -tama.charStat.speedX;
        
    }
    
    if (tama.defaultLocationY > 250 || tama.defaultLocationY < 40 ) {
        // this makes the character go in the opp direction
        tama.charStat.speedY = -tama.charStat.speedY;

    }

    if (tama.charStat.speedX < 0) {
        c.clearRect(0, 30, canvas.width, canvas.height);
        tama.drawChar2(tama.defaultLocationX, tama.defaultLocationY, img.width / 4, img.height / 4);

        tama.text();
        tama.statusBar();
    }
};


tama.moveCharFood = function() {
    tama.frameId = requestAnimationFrame(tama.moveCharFood);
    c.clearRect(0, 30, canvas.width, canvas.height);
    tama.drawChar2(tama.defaultLocationX + 50, tama.defaultLocationY, img.width / 4, img.height / 4);
    tama.drawFood(tama.foodLocX, tama.foodLocY);
    tama.foodLocX += tama.charStat.speedX -1.5;
    tama.foodLocY += tama.charStat.speedY -0.7;
    tama.text();
    tama.statusBar();

    if(tama.foodLocX >= tama.defaultLocationX + 20) {
        // tama.foodLocX = 900;
        // cancelAnimationFrame(tama.moveCharFood);
        c.clearRect(0, 30, canvas.width, canvas.height);
        tama.text();
        tama.statusBar();
        tama.drawChar2(tama.defaultLocationX -50, tama.defaultLocationY - 80, img.width / 2, img.height / 2);

        c.fillText("yas", 330, 130);
    }
    if(tama.foodlocX < 0 ) {
        // c.clearRect(0, 30, canvas.width, canvas.height);
        // tama.drawChar2(tama.defaultLocationX, tama.defaultLocationY, img.width / 4, img.height / 4);
        tama.charStat.speedX = -tama.charStat.speedX;
    }
        
    
};

tama.moveCharClean = function(){
    tama.frameId = requestAnimationFrame(tama.moveCharClean);
    c.clearRect(0, 30, canvas.width, canvas.height);
    tama.drawChar2(tama.defaultLocationX -50, tama.defaultLocationY, img.width / 4, img.height / 4);
    tama.drawBrush(tama.objLocX +110, tama.objLocY);
    // tama.objLocX -= tama.charStat.speedX - 2;
    tama.objLocY -= tama.charStat.speedY;
    if (tama.objLocY > 180 || tama.objLocY < 150) {
        // this makes the character go in the opp direction
        tama.charStat.speedY = -tama.charStat.speedY;
    }
    tama.text();
    tama.statusBar();
}

function init() {
    tama.moveCharIdle();

    $('.left').on('click', function() {
        // c.clearRect(0,0,canvas.width, canvas.height);
        //requestAnimationFrame(tama.moveCharIdle);
        cancelAnimationFrame(tama.frameId);
        tama.moveCharFood();
    });
    $('.right').on('click', function() {
        cancelAnimationFrame(tama.frameId);
        
        tama.moveCharClean();
    });

}



// tama.moveCharFood() {

// }


    // x++;
    // console.log(tama.defaultLocation);
    // console.log(x);




// c.translate(0, 0);


// c.drawImage(img, 10, 10);







$(function () {
    init();
    // tama.drawChar(tamaApp.defaultLocation, tamaApp.defaultLocation );
    // tamaApp.text();   
    // tamaApp.statusBar();
    // tamaApp.moveCharIdle();
    // tamaApp.moveCharFood();   
    // tamaApp.moveCharClean();
                                                                                                                                                                                  
});

// draw in order -
// set in
// array 
