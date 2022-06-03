const BACK_COLOUR = '#000000';
const LINE_COLOUR = '#FFFFFF';
const LINE_WIDTH = 11;
var previousX = 0;
var currentX = 0;
var previousY = 0;
var currentY = 0;

var canvas;
var context;

function prepareCanvas() {
    console.log('Preparing Canvas');
    canvas = document.getElementById('mycanvas');
    context = canvas.getContext('2d');

    context.fillStyle = BACK_COLOUR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOUR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round'

    var isPainting = false;

    document.addEventListener('mousedown', function (event) {

      isPainting = true;
      currentX = event.clientX - canvas.offsetLeft + 80;
      currentY = event.clientY - canvas.offsetTop;
      console.log('mouse is pressed');
      console.log(currentX +" " + currentY);

    });
    document.addEventListener('mousemove', function (event) {

      if(isPainting){
        previousX = currentX;
        currentX = event.clientX - canvas.offsetLeft;

        previousY = currentY;
        currentY = event.clientY - canvas.offsetTop;

        draw();

        console.log(`previous X: ${previousX}\nCurrent X: ${currentX}`);
        console.log(`offset left X: ${canvas.offsetLeft}\npffset top X: ${canvas.offsetTop}`);
      }

    });

    document.addEventListener('mouseup', function (event) {
      console.log('mouse is released');
      isPainting = false;
    });

    canvas.addEventListener('mouseleave', function(event){
      isPainting = false;
    });

    canvas.addEventListener('touchstart', function (event) {
      console.log("touch down");
      isPainting = true;
      currentX = event.touches[0].clientX - canvas.offsetLeft;
      currentY = event.touches[0].clientY - canvas.offsetTop;



    });

    canvas.addEventListener('touchend', function(event){
      isPainting = false;
    });
    canvas.addEventListener('touchcancel', function(event){
      isPainting = false;
    });

    canvas.addEventListener('touchmove', function (event) {

      if(isPainting){
        previousX = currentX;
        currentX = event.touches[0].clientX  - canvas.offsetLeft;

        previousY = currentY;
        currentY = event.touches[0].clientY  - canvas.offsetTop;

        draw();


      }

    });


}

function draw() {
  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(currentX, currentY);
  context.closePath();
  context.stroke();
}

function clearCanvas() {
    previousX = 0;
    currentX = 0;
    previousY = 0;
    currentY = 0;
    canvas = document.getElementById('mycanvas');
    context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);
}
