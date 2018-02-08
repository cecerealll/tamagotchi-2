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

tamaApp = {};

tamaApp.defaultLocationX = canvas.width * 0.4;
tamaApp.defaultLocationY = canvas.height * 0.4;
tamaApp.defaultStat = 100;
tamaApp.objLocX = 100;
tamaApp.objLocY = 150;

tamaApp.charStat = {
    location: {
        x: tamaApp.defaultLocationX,
        y: tamaApp.defaultLocationY
    },
    width: img.width / 4,
    height: img.height / 4,
    speedX: 2.8,
    speedY: 1.2,
    energy: tamaApp.defaultStat,
    cleanliness: tamaApp.defaultStat,
    fun: tamaApp.defaultStat
}

tamaApp.drawChar = function(x, y, w, h) {
    c.drawImage(img, x, y, w, h);
}
// tamaApp.drawCharRot = function (rad) {
//     c.drawImage(img, tamaApp.defaultLocationX, tamaApp.defaultLocationY, img.width / 4, img.height / 4);
//     // c.translate(canvas.width, canvas.height)
//     c.rotate(rad);
// }
tamaApp.drawChar2 = function (x, y, w, h) {
    c.drawImage(img2, x, y, w, h);
}
tamaApp.drawFood = function(x, y) {
    c.drawImage(carrot, x, y, img.width / 6, img.height / 6);
}
tamaApp.drawBrush = function(x,y) {
    c.drawImage(brush, x, y, img.width / 5, img.height / 5);    
}




// font
// x = 0
// y = 0

tamaApp.text = function() {
    c.font = "30px Arial";
    c.fillStyle = "grey";
    c.fillText("feed", 48, 430);
    c.fillText('play', 195, 430);
    c.fillText('clean', 338, 430);
}

tamaApp.statusBar = function() {
    c.fillRect(25, 10, 100, 10);
    c.fillRect(25+100+50, 10, 100, 10);
    c.fillRect(25+100+50+100+50, 10, 100, 10);
        

}

// on load functio
tamaApp.moveCharIdle = function() {
    // makes loop 
    requestAnimationFrame(tamaApp.moveCharIdle);
    // clear the drawigns made before the nenw drawinng
    c.clearRect(0, 30, canvas.width, canvas.height);
    // draw the cahracter in halfway thru
    tamaApp.drawChar(tamaApp.defaultLocationX, tamaApp.defaultLocationY, img.width / 4, img.height / 4);
    // create a speed for  the characer changing the x locations
    tamaApp.defaultLocationX += tamaApp.charStat.speedX;
    tamaApp.defaultLocationY += tamaApp.charStat.speedY;
    tamaApp.text();
    tamaApp.statusBar();


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
        c.clearRect(0, 30, canvas.width, canvas.height);
        tamaApp.drawChar2(tamaApp.defaultLocationX, tamaApp.defaultLocationY, img.width / 4, img.height / 4);
        tamaApp.text();
        tamaApp.statusBar();
    }
};


tamaApp.moveCharFood = function() {
    requestAnimationFrame(tamaApp.moveCharFood);
    c.clearRect(0, 30, canvas.width, canvas.height);
    tamaApp.drawChar2(tamaApp.defaultLocationX + 50, tamaApp.defaultLocationY, img.width / 4, img.height / 4);
    tamaApp.drawFood(tamaApp.objLocX, tamaApp.objLocY);
    tamaApp.objLocX += tamaApp.charStat.speedX -1.5;
    tamaApp.objLocY += tamaApp.charStat.speedY -0.7;
    tamaApp.text();
    tamaApp.statusBar();

    if(tamaApp.objLocX >= tamaApp.defaultLocationX + 20) {
        tamaApp.objLocX = 900;
        cancelAnimationFrame(tamaApp.moveCharFood);
        c.clearRect(0, 30, canvas.width, canvas.height);
        tamaApp.text();
        tamaApp.statusBar();
        tamaApp.drawChar2(tamaApp.defaultLocationX -50, tamaApp.defaultLocationY - 80, img.width / 2, img.height / 2);

        c.fillText("yas", 330, 130);
        // tamaApp.drawCharRot(45)
    }
    // c.clearRect(0,0, canvas.width, canvas.height);
    // cancelAnimationFrame(moveCharFood);
    // tamaApp.moveCharIdle();
    // tamaApp.drawChar2(tamaApp.defaultLocationX+50, tamaApp.defaultLocationY); 
};

tamaApp.moveCharClean = function(){
    requestAnimationFrame(tamaApp.moveCharClean);
    c.clearRect(0, 30, canvas.width, canvas.height);
    tamaApp.drawChar2(tamaApp.defaultLocationX -50, tamaApp.defaultLocationY, img.width / 4, img.height / 4);
    tamaApp.drawBrush(tamaApp.objLocX +110, tamaApp.objLocY);
    // tamaApp.objLocX -= tamaApp.charStat.speedX - 2;
    tamaApp.objLocY -= tamaApp.charStat.speedY;
    if (tamaApp.objLocY > 180 || tamaApp.objLocY < 150) {
        // this makes the character go in the opp direction
        tamaApp.charStat.speedY = -tamaApp.charStat.speedY;
    }
    tamaApp.text();
    tamaApp.statusBar();
}


// tamaApp.moveCharFood() {

// }


    // x++;
    // console.log(tamaApp.defaultLocation);
    // console.log(x);




// c.translate(0, 0);


// c.drawImage(img, 10, 10);







$(function () {
    // tamaApp.drawChar(tamaApp.defaultLocation, tamaApp.defaultLocation );
    // tamaApp.text();   
    // tamaApp.statusBar();
    tamaApp.moveCharIdle();
    // tamaApp.moveCharFood();   
    // tamaApp.moveCharClean();
                                                                                                                                                                                  
});

// draw in order -
// set in
// array 
