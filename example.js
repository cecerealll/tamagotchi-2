// .fillRect takes 4 values, x, y, width, height x y relative from top left of canvas
c.fillStyle = "pink";
c.fillRect(100, 100, 100, 100);
// as you make more recs you can nindicate a fillstyle before it to change each rec fill color
// console.log(canvas);

// line
c.beginPath();
// where to start
c.moveTo(50, 300);
// where to ennd
c.lineTo(300, 100);
c.lineTo(60,10);
// add color
c.strokeStyle = "red";
// stroke to see
c.stroke();


// arc/circle
// takes lots of argumets (x, y, r, start angle(radians), end angle)
//  to have full circle make start angle 0 and end of Math.PI * 2, drawcounnterclockwise(boolean value)
// this is a noutline you cotn see anything, gotta stroke or fill
// if you dont begin path againn itll conenct to the last stoke
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.stroke();

// multiple circles (for loop)
// condition i = amt of shit u w
// to have locatiosn change, ad a var for x and y
for (let i = 0; i < 4; i++) {
    let x = Math.random() * 450;
    let y = Math.random() * 450;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();
}