
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
let char = new Image();
char.src = 'assets/char.png';
let charFlip = new Image();
charFlip.src = 'assets/char-flipped.png';
let carrot = new Image();
carrot.src = 'assets/carrot.png';
let brush = new Image();
brush.src = 'assets/hairbrush.png';
let hurdle = new Image();
hurdle.src = 'assets/bush.png';
const floor = canvas.height * 0.55;
const ceiling = 100;
const jmpUp = 2.8;
const jmpDown = 2.5;
let isPlaying = false;
let timeoutID;
let intervalID;



tama = {};

tama.clear = function() {
    c.clearRect(0,0,canvas.width,canvas.height);
}

// const reset = document.getElementsByClassName('reset');


// statistics of each object
tama.charStat = {
    locX: canvas.width * 0.4,
    locY: canvas.height * 0.4,
    newLocX: canvas.width * 0.4,
    newLocY: canvas.height * 0.4,
    playLocY: canvas.height * 0.55,
    playNLocY: canvas.height * 0.55,    
    speedX: 1,
    speedY: 1,
    jumpSpd: jmpUp,  
    food: 100,
    fun: 100,
    clean: 100,
    score: 0,
    // isJumping: false
};

tama.foodStat = {
    locX: canvas.width * 0.15,
    locY: canvas.height * 0.3,
    newLocX: canvas.width * 0.15,
    newLocY: canvas.height * 0.3,
    speedX: 1,
    speedY: 1
};

tama.brushStat = {
    locX: canvas.width * 0.54,
    locY: canvas.height * 0.4,
    newLocX: canvas.width * 0.4,
    newLocY: canvas.height * 0.4,
    speedX: 1,
    speedY: 1
};

tama.hurdleStat = {
    locX: canvas.width - 60,
    locY: canvas.height * 0.6,
    newLocX: canvas.width - 60,
    newLocY: canvas.height * 0.6,
    speedX: 3,
    speedY: 1
};



// fill backgrounnd with 2 colors to be passed in
tama.background = function(a, b) {
    c.fillStyle = a;
    c.fillRect(0, 0, canvas.width, canvas.height * 0.4);
    c.fillStyle = b;
    c.fillRect(0, canvas.height * 0.4 , canvas.width, canvas.height * 0.6);
}


// reset funnction just idk for jokes
tama.reset = function() {
    cancelAnimationFrame(tama.frameID);
    tama.clear();
}


// text may not be needed soonn
tama.text = function() {
    c.font = "28px Monda";
    c.fillStyle = "grey";
    c.fillText("FEED", 40, 430);
    c.fillText('PLAY', 190, 430);
    c.fillText('CLEAN', 327, 430);
}


// status bar and text associated with it
tama.statusBar = function() {
    c.fillStyle = "salmon";    
    c.fillRect(325, 30, tama.charStat.food, 12);
    c.font = "12px Monda";    
    c.fillStyle = "grey";        
    c.fillText("FULLNESS", 260, 39);  

    c.fillStyle = "mediumaquamarine";
    c.fillRect(325, 50,tama.charStat.fun, 12);
    c.fillStyle = "grey";            
    c.fillText("HAPPINESS", 250, 59.5); 
    c.fillStyle = "lightblue";
    c.fillRect(325, 70, tama.charStat.clean, 12);
    c.fillStyle = "grey";            
    c.fillText("CLEANLINESS", 235, 80.5); 
}

tama.scoreCount = function(){
    c.font = "20px Monda";    
    c.fillText("SCORE", 20, 50);
    c.fillText(tama.charStat.score, 110, 50);
    
    
}
// adds text adn status to screen everytime we clear the screen we may not need the text soon
tama.setScreen = function() {
    // tama.background('white', 'white');
    // tama.text();
    tama.statusBar();
}

// drawinng inn the differetn images at diffterent locationns dependinng
tama.charDraw = function(x, y, w, h) {
    c.drawImage(char, x, y, w, h);
}

tama.charDrawF = function(x, y, w, h) {
    c.drawImage(charFlip, x, y, w, h);
}

tama.foodDraw = function() {
    c.drawImage(carrot, tama.foodStat.locX, tama.foodStat.locY, carrot.width / 5.5, carrot.width / 5.5);
}

tama.cleanDraw = function () {
    c.drawImage(brush, tama.brushStat.locX, tama.brushStat.locY, brush.width / 5, brush.width / 5);
}
tama.hurdleDraw = function () {
    c.drawImage(hurdle, tama.hurdleStat.newLocX, tama.hurdleStat.newLocY, hurdle.width / 6, hurdle.width / 6);
}

// idle function
tama.idle = function(){
    // tama.imgImport();
    tama.reset();    
    tama.frameID = requestAnimationFrame(tama.idle);
    // c.clearRect(0,0,canvas.width, canvas.height());
    // tama.charDraw(0, 0);
    tama.clear();
    // tama.charStat.reset();
    tama.charDraw(tama.charStat.newLocX, tama.charStat.newLocY, char.width / 3.5, char.height / 3.5);
    tama.charStat.newLocX += tama.charStat.speedX*2.5;
    tama.charStat.newLocY += tama.charStat.speedY*1.2;
    
    if (tama.charStat.newLocX < 0 || tama.charStat.newLocX > 450 - char.width / 3.5){
        tama.charStat.speedX = -tama.charStat.speedX;     
    };

    if (tama.charStat.newLocY < 0 || tama.charStat.newLocY > canvas.height - char.height / 3.5) {
        tama.charStat.speedY = -tama.charStat.speedY;
    };
    
    if (tama.charStat.speedX < 0) {
        tama.clear();
        // tama.setScreen();
        tama.charDrawF(tama.charStat.newLocX, tama.charStat.newLocY, char.width / 3.5, char.height / 3.5);
    }

    tama.setScreen();
}

// feed functionn
tama.food = function() {
    // cancelAnimationFrame(tama.idle);    
    tama.reset();
    tama.frameID = requestAnimationFrame(tama.food);
    tama.clear();
    // tama.charStat.reset();
    tama.charDrawF(tama.charStat.locX, tama.charStat.locY, char.width / 3, char.height / 3);
    tama.foodDraw();   
    // c.fillText("HAPPINESS", 250, 59.5); 
    
    // tama.barResetF();
    

    if(tama.foodStat.locX > 0){
    tama.foodStat.locX += tama.foodStat.speedX*1.5;
    tama.foodStat.locY += tama.foodStat.speedY;
    } 

    if(tama.foodStat.locX >= tama.charStat.locX) {
        // tama.clear();
        // tama.foodStat.locX = tama.foodStat.newLocX;
        tama.clear();
        cancelAnimationFrame(tama.frameID);
        tama.charDrawF(tama.charStat.locX / 2.7, tama.charStat.locY/ 1.5, char.width / 1.7, char.height / 1.7);
        c.font = "40px Monda";
        c.fillStyle = "grey";
        c.fillText("Yaaas", 300, 200); 
        tama.foodStat.locX = tama.foodStat.newLocX;
        tama.foodStat.locY = tama.foodStat.newLocY;;
    } 
    tama.setScreen();   
    
}

// clean animation
tama.clean = function() {
    tama.reset();
    tama.frameID = requestAnimationFrame(tama.clean);
    tama.clear();
    // tama.barResetB();
    tama.charDrawF(tama.charStat.locX - 40, tama.charStat.locY, char.width / 3, char.height / 3);    
    tama.cleanDraw(tama.brushStat.locX, tama.brushStat.locY);
    tama.setScreen();   
    tama.brushStat.locY += tama.brushStat.speedY;
    if(tama.brushStat.locY < 175 || tama.brushStat.locY > 195) {
        tama.brushStat.speedY = -tama.brushStat.speedY;
    }  
}

// // play mode
// tama.play = function() {
    
    


    tama.play = function() {
        tama.reset();
        tama.frameID = requestAnimationFrame(tama.play);
        tama.clear();
        tama.charDraw(0, tama.charStat.playLocY, char.width / 4, char.height / 4);
         tama.setScreen();
         tama.scoreCount();
         tama.hurdleDraw();
        tama.hurdleStat.newLocX -= tama.hurdleStat.speedX;
        if (tama.hurdleStat.newLocX + 50 <= char.width / 4 && tama.hurdleStat.newLocY <= char.height / 4 + tama.charStat.playLocY && tama.hurdleStat.newLocX > 0){
            cancelAnimationFrame(tama.frameID);
            // cancelAnimationFrame(tama.frameID2);
            tama.clear();
            c.fillText("GAME OVER", 300, 200); 
            // tama.charStat.score
            // isPlaying = false;
            // tama.timeOut(2000);
            tama.gameOverTimeOut(1000);

        }
        if(tama.hurdleStat.newLocX <= - hurdle.width / 6) {
            tama.hurdleStat.newLocX = canvas.width - 60;
            tama.charStat.score += 2;
        } 
    }



    // let jumpingSpeed = tama.charStat.jumpSpdUp;
    tama.jump = function() { 
        cancelAnimationFrame(tama.frameID2);
        tama.frameID2 = requestAnimationFrame(tama.jump);
        // tama.clear();
        tama.charDraw(0, tama.charStat.playLocY, char.width / 4, char.height / 4);
        tama.setScreen();

        tama.charStat.playLocY -= tama.charStat.jumpSpd;
        if(tama.charStat.playLocY <= ceiling){
            tama.charStat.jumpSpd = -jmpDown;
        } else if(tama.charStat.playLocY >= floor){
            tama.charStat.jumpSpd = jmpUp;
            tama.charStat.playLocY = floor;
            cancelAnimationFrame(tama.frameID2);
        }
        
        if (tama.hurdleStat.newLocX + 50 <= char.width / 4 && tama.hurdleStat.newLocY <= char.height / 4 + tama.charStat.playLocY && tama.hurdleStat.newLocX > 0) {
            cancelAnimationFrame(tama.frameID2);
            // c.fillText("GAME OVER", 300, 200); 
            
            // tama.clear();
        }
    }

    




// this is for how long each animation will take before going back to the idle animation
tama.timeOut = function(x) {
    timeoutID = setTimeout(tama.idle, x);
}

tama.gameOverTimeOut = function(x) {
    timeoutID = setTimeout(function(){
        tama.idle();
        isPlaying = false;
        tama.hurdleStat.newLocX =  tama.hurdleStat.locX;
        tama.charStat.playLocY = floor;
        tama.charStat.score = 0;
    }, x);
}

//

// function foo (arg, callback) {

//     if (typeof callback == 'function') callback();
// }

// foo('hi', 12312412)

//tama.timeOut = function (x, callback) {
//     timeoutID = setTimeout(function () {
//         tama.idle();
//         if (typeof callback === 'function') {
//             callback();
//         }
//     }, x);
// }


// status bar, how much the status bar will decrease by
tama.barDecrease = function(food, clean) {
    intervalID = setInterval(food, 1000);
    intervalID = setInterval(clean, 2000);    
}

// tellingn the food status bar to decrease by one per time speicfied in the bar decrease function
tama.foodBar = function() {
    tama.charStat.food --;
    if(tama.charStat.food <= 0) {
        tama.charStat.food = 0;
        cancelAnimationFrame(tama.frameID);
    }
}
// resets the status bar for whenn the user feeds or cleans the tamagotchi
tama.barResetF = function() {
    tama.charStat.food = 100;
}


// same as above but for the brush
tama.cleanBar = function () {
    tama.charStat.clean--;
    if (tama.charStat.clean <= 0) {
        tama.charStat.clean = 0;
        cancelAnimationFrame(tama.frameID);        
    }
}
tama.barResetB = function () {
    tama.charStat.clean = 100;
}


tama.init = function() {
    // tama.imgImport(); this doen tdo anything
    // tama.setScreen();
    // tama.charDraw(0, 0, char.width / 4, char.height / 4);
    tama.idle();
    tama.barDecrease(tama.foodBar, tama.cleanBar);
    // tama.food();
    // tama.reset();
    $('.left').on('click', function() {
        // c.clearRect(0,0,canvas.width, canvas.height);
        //requestAnimationFrame(tama.moveCharIdle);
        // tama.clear();
        // cancelAnimationFrame(tama.frameID);
        // tama.charStat.reset();
        // tama.clear();
        // tama.reset();
        if(!isPlaying) {
            tama.barResetF();
            tama.food();
            tama.timeOut(3000);
        }

        // tama.charStat.food
        // tama.idle();
    });

    $('.middle').on('click', function(){
        if (!isPlaying) {
            isPlaying = true;
            tama.play();
        } else {
            tama.jump();
        }
    });
    $('.right').on('click', function () {
        if(!isPlaying) {
            tama.barResetB();        
            tama.clean();
            tama.timeOut(1700);
        }
    });
}



$(function() {
    tama.init();
    // tama.play();
    //tama.jump();
    //   $('.play').on('click', function () {
    //       tama.jump();
    //       // tama.frameID = requestAnimationFrame(tama.play);
    //   });
    // tama.charDrawF(tama.charStat.locX, tama.charStat.locY);
});

// how to make the food screen last for 3 sec and then go back to idle
// make object distance relative to char

// take out the text from the screen and make them wrap around the buttons
// import a button clickinng effect to make them easier to see
// favicon
 
// put in 5 flowers at random places during clean

// put yas inn the food aninmation
// make it so that you cant click any key when food or clea nanimation ngoinng on

// make the play function
    // make the obstacle object
    // make it constantly move to the left and after reachign amount, refresh go back to startign
    // the middle buttonn now triggers the char to jump 
    // score go up by one each time the character jumps over the hurdle
    // if player touches hurdle, display lose text and go back to idle (cant use time out anymore)
    // every 5 score makes the obstacles faster
    // making the cleann bar deplete faster during play


// starting ainmation, asking for player name annd pasting that in game
// making a shell backgrounnd for screen, change color to show responsiveness

// think about issue with status bars, because i stopped animaation the bar values are goinng down but the bar is not reflecting so