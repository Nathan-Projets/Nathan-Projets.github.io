var compteurElem = document.getElementById("compteur");
var image = document.getElementById("image");
var i = 10;

function decremente() {
    if (i > 0) {
        i -= 1;
        compteurElem.innerText = i;
    } else {
        clearInterval(timer);
        image.src = "assets/image/update-arrow.svg";
        image.addEventListener("click", function () {
            clearInterval(timer);
            image.src = "assets/image/stopwatch.svg";
            i = 10;
            compteurElem.innerText = i;
            timer = setInterval('decremente()', 1000);
            this.removeEventListener("click", function () {});
        });
    }
}

var timer = setInterval(decremente, 1000);
var x = 0,
    y = 0;
var compteurCanvas = 60;

var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    draw();
}

var timerDraw = setInterval(update, 10, true);

function draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 10, 10);
}

function update(bool) {
    if(bool) {
        compteurCanvas -= 1;
        if (compteurCanvas > 0) {
            ctx.clearRect(x, y, 10, 10);
            x += 10;
            ctx.fillRect(x, y, 10, 10);
        } else {
            clearInterval(timerDraw);
            timerDraw = setInterval(update, 10, false);
        }
    } else {
        compteurCanvas += 1;
        if (compteurCanvas < 60) {
            ctx.clearRect(x, y, 10, 10);
            x -= 10;
            ctx.fillRect(x, y, 10, 10);
        } else {
            clearInterval(timerDraw);
            timerDraw = setInterval(update, 10, true);
        }
    }
    
}