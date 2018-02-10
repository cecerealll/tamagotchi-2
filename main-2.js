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
let timeoutID;
let intervalID;



tama = {};

tama.clear = function() {
    c.clearRect(0,0,canvas.width,canvas.height);
}

const reset = document.getElementsByClassName('reset');

tama.charStat = {
    locX: canvas.width * 0.4,
    locY: canvas.height * 0.4,
    newLocX: canvas.width * 0.4,
    newLocY: canvas.height * 0.4,
    // reset: function() {c.translate(this.locX, this.locY)},
    speedX: 1,
    speedY: 1,
    food: 100,
    fun: 100,
    clean: 100
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
    locX: canvas.width * 0.48,
    locY: canvas.height * 0.4,
    newLocX: canvas.width * 0.4,
    newLocY: canvas.height * 0.4,
    speedX: 1,
    speedY: 1
};


tama.imgImport = function() {
    let char = new Image();
    char.src = 'assets/char.png';
    

}

tama.background = function(a, b) {
    c.fillStyle = a;
    c.fillRect(0, 0, canvas.width, canvas.height * 0.4);
    c.fillStyle = b;
    c.fillRect(0, canvas.height * 0.4 , canvas.width, canvas.height * 0.6);
}

tama.reset = function() {
  

    cancelAnimationFrame(tama.frameID);
    tama.clear();
}

tama.text = function() {
    c.font = "28px Monda";
    c.fillStyle = "grey";
    c.fillText("FEED", 40, 430);
    c.fillText('PLAY', 190, 430);
    c.fillText('CLEAN', 327, 430);
}

tama.statusBar = function() {
    c.fillStyle = "salmon";    
    c.fillRect(325, 25, tama.charStat.food, 10);
    c.font = "12px Monda";    
    c.fillStyle = "grey";        
    c.fillText("FULLNESS", 260, 34);  

    c.fillStyle = "mediumaquamarine";
    c.fillRect(325, 45,tama.charStat.fun, 10);
    c.fillStyle = "grey";            
    c.fillText("HAPPINESS", 250, 54); 
    c.fillStyle = "lightblue";
    c.fillRect(325, 65, tama.charStat.clean, 10);
    c.fillStyle = "grey";            
    c.fillText("CLEANLINESS", 235, 74.5); 
}

tama.setScreen = function() {
    // tama.background('white', 'white');
    tama.text();
    tama.statusBar();
}

tama.charDraw = function(x, y, w, h) {
    c.drawImage(char, x, y, w, h);
}

tama.charDrawF = function(x, y, w, h) {
    c.drawImage(charFlip, x, y, w, h);
}

tama.foodDraw = function() {
    c.drawImage(carrot, tama.foodStat.locX, tama.foodStat.locY, carrot.width / 6, carrot.width / 6);
}

tama.cleanDraw = function () {
    c.drawImage(brush, tama.brushStat.locX, tama.brushStat.locY, brush.width / 6, brush.width / 6);
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
    tama.charDraw(tama.charStat.newLocX, tama.charStat.newLocY, char.width / 4, char.height / 4);
    tama.charStat.newLocX += tama.charStat.speedX*2.5;
    tama.charStat.newLocY += tama.charStat.speedY*1.2;
    
    if (tama.charStat.newLocX < 0 || tama.charStat.newLocX > 345){
        tama.charStat.speedX = -tama.charStat.speedX;     
    };

    if (tama.charStat.newLocY < 0 || tama.charStat.newLocY > 270) {
        tama.charStat.speedY = -tama.charStat.speedY;
    };
    
    if (tama.charStat.speedX < 0) {
        tama.clear();
        // tama.setScreen();
        tama.charDrawF(tama.charStat.newLocX, tama.charStat.newLocY, char.width / 4, char.height / 4);
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
    tama.charDrawF(tama.charStat.locX, tama.charStat.locY, char.width / 4, char.height / 4);
    tama.foodDraw();   
    tama.barResetF();
    

    if(tama.foodStat.locX > 0){
    tama.foodStat.locX += tama.foodStat.speedX*1.5;
    tama.foodStat.locY += tama.foodStat.speedY;
    } 

    if(tama.foodStat.locX >= tama.charStat.locX) {
        // tama.clear();
        // tama.foodStat.locX = tama.foodStat.newLocX;
        tama.clear();
        cancelAnimationFrame(tama.frameID);
        tama.charDrawF(tama.charStat.locX / 2, tama.charStat.locY/ 1.5, char.width / 2, char.height / 2);
        tama.foodStat.locX = tama.foodStat.newLocX;
        tama.foodStat.locY = tama.foodStat.newLocY;;
    } 
    tama.setScreen();    
}

tama.clean = function() {
    tama.reset();
    tama.frameID = requestAnimationFrame(tama.clean);
    tama.clear();
    tama.barResetB();
    tama.charDrawF(tama.charStat.locX - 30, tama.charStat.locY, char.width / 4, char.height / 4);    
    tama.cleanDraw(tama.brushStat.locX, tama.brushStat.locY);
    tama.setScreen();   
    tama.brushStat.locY += tama.brushStat.speedY;
    if(tama.brushStat.locY < 175 || tama.brushStat.locY > 195) {
        tama.brushStat.speedY = -tama.brushStat.speedY;
    }  
}

// status bar
tama.timeOut = function(x) {
    timeoutID = setTimeout(tama.idle, x);
    // timeoutID = setTimeout(tama.idle, y);
    // timeoutID = setTimeout(tama.idle, z);
    
}
tama.barDecrease = function(x, y) {
    intervalID = setInterval(x, 1000);
    intervalID = setInterval(y, 2000);    
}


tama.foodBar = function() {
    tama.charStat.food --;
    if(tama.charStat.food <= 0) {
        tama.charStat.food = 0;
        cancelAnimationFrame(tama.frameID);
    }
}

tama.barResetF = function() {
    tama.charStat.food = 100;
}

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


// tama.deplete = function() {
//     tama.charStat.food = tama.charStat.food - 1;

// }



// tama.charWidth = char.width / 2;
// tama.charHeight = char.height / 2;

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
            tama.food();
            tama.timeOut(3000);
            // tama.charStat.food
            // tama.idle();
        });
    $('.right').on('click', function () {
        tama.clean();
        tama.timeOut(1700);
    });
        
        // $('.reset').on('click', function () {
        //     // e.preventDefault();
        
        //     // Start the animation.
        //     // tama.charStat.locX = tama.charStat.locX;
        //     // console.log('hey');
        //     cancelAnimationFrame(tama.frameID);
        //     tama.clear();
        //     // tama.charDraw(tama.charStat.locX, tama.charStat.locY);
        //     // tama.charDraw()
        //     // requestID = requestAnimationFrame(animate);
        // });
    // c.translate(0,0);
}



$(function() {
    tama.init();
    // tama.charDrawF(tama.charStat.locX, tama.charStat.locY);
});

// how to make the food screen last for 3 sec and then go back to idle
// make object distance relative to char