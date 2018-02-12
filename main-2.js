// hey quick note the amazing personn markinng my code, i have an issue with my "n" key so you might enncounter many many inntances where the n is nont where it should be in my commennts, sorry!

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
let flower = new Image();
flower.src = 'assets/flower.png'
let cloud = new Image();
cloud.src = 'assets/cloud.png'
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



// statistics of each object
tama.charStat = {
    name: prompt('Name your Tamagotchi!'),
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
    play: 100,
    clean: 100,
    score: 0,
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

tama.cloudStat = {
    locX: canvas.width + cloud.width,
    locY: canvas.height * 0.2,
    newLocX: canvas.width + cloud.width,
    newLocY: canvas.height * 0.2,
    speedX: 2,
    speedY: 1
};



// fill backgrounnd with 2 colors to be passed in
tama.background = function(a, b) {
    c.fillStyle = a;
    c.fillRect(0, 0, canvas.width, floor);
    c.fillStyle = b;
    c.fillRect(0, floor , canvas.width, canvas.height * 0.55);
}


// reset funnction just idk for jokes
tama.reset = function() {
    cancelAnimationFrame(tama.frameID);
    tama.clear();
}


// text on canvas
tama.text = function() {
    c.font = "14px Monda";
    c.fillStyle = "grey";
    c.fillText('Please wait till animation is finished before clicking button!', 30, 440);
}


// status bar and text associated with it
tama.statusBar = function() {
    c.fillStyle = "salmon";    
    c.fillRect(325, 30, tama.charStat.food, 12);
    c.font = "12px Monda";    
    c.fillStyle = "grey";        
    c.fillText("FULLNESS", 260, 39);  

    c.fillStyle = "mediumaquamarine";
    c.fillRect(325, 50,tama.charStat.play, 12);
    c.fillStyle = "grey";            
    c.fillText("HAPPINESS", 250, 59.5); 
    c.fillStyle = "lightblue";
    c.fillRect(325, 70, tama.charStat.clean, 12);
    c.fillStyle = "grey";            
    c.fillText("CLEANLINESS", 235, 80.5); 
}

// display score
tama.scoreCount = function(){
    c.font = "20px Monda";    
    c.fillText("SCORE", 20, 80);
    c.fillText(tama.charStat.score, 110, 80);
    
    
}
// adds text adn status to screen everytime we clear the screen we may not need the text soon
tama.setScreen = function() {
    // tama.background('white', 'white');
    tama.text();
    tama.statusBar();
    c.font = "25px Monda";        
    c.fillText(tama.charStat.name, 20, 45);    
    
}

// drawinng inn the different images at diffterent locationns dependinng
// draw image takes inn the img, x, y , width and height
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

tama.flowerDraw = function (x, y) {
    c.drawImage(flower, x, y, flower.width / 10, flower.width / 10);
} 

tama.cloudDraw = function(y) {
    c.drawImage(cloud, tama.cloudStat.newLocX, y, cloud.width / 7, cloud.height / 7);
    
}

// idle screen function
tama.idle = function(){
    tama.reset();    
    tama.frameID = requestAnimationFrame(tama.idle);
    tama.clear();
    tama.background('snow', 'snow');
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
        tama.background('snow', 'snow');
        tama.charDrawF(tama.charStat.newLocX, tama.charStat.newLocY, char.width / 3.5, char.height / 3.5);
        
    }
    tama.setScreen();
}

// feed annimation
tama.food = function() {
    tama.reset();
    tama.frameID = requestAnimationFrame(tama.food);
    tama.clear();
    tama.background('snow', 'snow');
    
    tama.charDrawF(tama.charStat.locX, tama.charStat.locY, char.width / 3, char.height / 3);
    tama.foodDraw();   
    

    if(tama.foodStat.locX > 0){
    tama.foodStat.locX += tama.foodStat.speedX*1.5;
    tama.foodStat.locY += tama.foodStat.speedY;
    } 

    if(tama.foodStat.locX >= tama.charStat.locX) {
        tama.clear();
        cancelAnimationFrame(tama.frameID);
        tama.background('snow', 'snow');
        
        tama.charDrawF(tama.charStat.locX / 2.7, tama.charStat.locY/ 1.5, char.width / 1.7, char.height / 1.7);
        c.font = "40px Monda";
        c.fillStyle = "grey";
        c.fillText("Yaaas", 300, 200); 
        c.font = "30px Monda";
        // c.fillStyle = "grey";
        c.fillText("*burp*", 320, 240); 
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
    tama.background('snow', 'snow');
    
    tama.charDrawF(tama.charStat.locX - 40, tama.charStat.locY, char.width / 3, char.height / 3);   
    
    tama.flowerDraw(50, 170);
    tama.flowerDraw(160, 76);
    tama.flowerDraw(300, 300);
    tama.flowerDraw(100, 320);
    tama.flowerDraw(320, 150);
    
    c.font = "18px Monda";
    c.fillStyle = "grey";
    c.fillText("*brush brush*", 220, 150); 
    tama.cleanDraw(tama.brushStat.locX, tama.brushStat.locY);
    tama.setScreen();   
    tama.brushStat.locY += tama.brushStat.speedY;
    if(tama.brushStat.locY < 175 || tama.brushStat.locY > 195) {
        tama.brushStat.speedY = -tama.brushStat.speedY;
    }  
}

// play screen with movinng bush andn clouds
tama.play = function() {
    tama.reset();
    tama.frameID = requestAnimationFrame(tama.play);
    tama.clear();
    tama.background('#a8f0ff', '#fdea9e');
    tama.charDraw(0, tama.charStat.playLocY, char.width / 4, char.height / 4);
    tama.barResetP();
    tama.setScreen();
    tama.scoreCount();
    tama.cloudDraw(canvas.height * 0.2);       
    tama.cloudStat.newLocX -= tama.cloudStat.speedX
    if (tama.cloudStat.newLocX <= - cloud.width / 7) {
        tama.cloudStat.newLocX = canvas.width + cloud.width / 7;
    } 
    tama.hurdleDraw();
    tama.hurdleStat.newLocX -= tama.hurdleStat.speedX;
    if (tama.hurdleStat.newLocX + 50 <= char.width / 4 && tama.hurdleStat.newLocY <= char.height / 4 + tama.charStat.playLocY && tama.hurdleStat.newLocX > 0){
        cancelAnimationFrame(tama.frameID);
        tama.clear();
        tama.scoreCount();          
        c.font = "40px Monda";            
        c.fillText("GAME OVER", 160, 200); 
        c.font = "20px Monda";                        
        c.fillText(`¯\\_(ツ)_/¯`, 200, 250);             
        tama.gameOverTimeOut(1500);

    }
    if(tama.hurdleStat.newLocX <= - hurdle.width / 6) {
        tama.hurdleStat.newLocX = canvas.width - 60;
        tama.charStat.score += 5;
    } 
}

// jump animation, needs separate frame id so both animationn could run at same time
tama.jump = function() { 
    cancelAnimationFrame(tama.frameID2);
    tama.frameID2 = requestAnimationFrame(tama.jump);
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
    }
}




// this is for how long each animation will take before going back to the idle animation
tama.timeOut = function(x) {
    timeoutID = setTimeout(tama.idle, x);
}

// setting a timeout for when game ennds and resetting the caharacter back into position so a new ggame coudl start
tama.gameOverTimeOut = function(x) {
    timeoutID = setTimeout(function(){
        tama.idle();
        isPlaying = false;
        tama.hurdleStat.newLocX =  tama.hurdleStat.locX;
        tama.charStat.playLocY = floor;
        tama.charStat.score = 0;
        $('.hide').show();
    }, x);
}


// status bar, how much the status bar will decrease by
tama.barDecrease = function(food, clean, play) {
    intervalID = setInterval(food, 1000);
    intervalID = setInterval(clean, 2000);  
    intervalID = setInterval(play, 3000);    
      
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

// agiann for play
tama.playBar = function () {
    tama.charStat.play--;
    if (tama.charStat.play <= 0) {
        tama.charStat.play = 0;
        cancelAnimationFrame(tama.frameID);
    }
}
tama.barResetP = function () {
    tama.charStat.play = 100;
}



tama.init = function() {
    tama.idle();
    tama.barDecrease(tama.foodBar, tama.cleanBar, tama.playBar);
    $('.left').on('click', function() {
        // so that it doesnt trigger when playing
        if(!isPlaying) {
            tama.barResetF();
            tama.food();
            tama.timeOut(2300);
        }
    });

    $('.middle').on('click', function(){
        // hide the button so they cant even click it hahahahahahhahahahahah
        $('.hide' ).hide();
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
});

// nts along the way

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


