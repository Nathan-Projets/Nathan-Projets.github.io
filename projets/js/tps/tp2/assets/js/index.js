// Exercice 1

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

// Exercice 2

var x = 0,
    y = 0;
var compteurCanvas = 30;

var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 10, 10);
    var timerDraw = setInterval(update2, 10, true);
}

function update2() {
    compteurCanvas -= 1;
    if (compteurCanvas > 0) {
        ctx.clearRect(x, y, 10, 10);
        x += 10;
        ctx.fillRect(x, y, 10, 10);
    } else {
        clearInterval(timerDraw);
    }
}

// Exercice 3

var x2 = 0,
    y2 = 0,
    compteurCanvas2 = 30;

var canvas2 = document.getElementById('canvas2');
if (canvas2.getContext) {
    var ctx2 = canvas2.getContext('2d');
    ctx2.fillStyle = "red";
    ctx2.fillRect(0, 0, 10, 10);
}

setTimeout(() => {
    var timerDraw3 = setInterval(update3, 10, timerDraw3);
}, 2000);

function update3(timerDraw3) {
    compteurCanvas2 -= 1;
    if (compteurCanvas2 > 0) {
        ctx2.clearRect(x2, y2, 10, 10);
        x2 += 10;
        ctx2.fillRect(x2, y2, 10, 10);
    } else {
        clearInterval(timerDraw3);
    }
}

// Exercice 4 


document.addEventListener("DOMContentLoaded", function () {

    let objets = [{
            x: 0,
            y: 0,
            width: 10,
            height: 10,
            compteur: 30,
            timer: "",
            draw: function (ctx) {
                ctx.fillRect(this.x, this.y, this.width, this.height);
            },
            clear: function (ctx) {
                ctx.clearRect(this.x, this.y, this.width, this.height);
            },
            update: function (ctx) {
                this.compteur--;
                if (this.compteur > 0) {
                    this.clear(ctx);
                    this.x += 10;
                    this.draw(ctx);
                } else {
                    clearInterval(this.timer);
                }
            }
        },
        {
            x: 0,
            y: 10,
            width: 10,
            height: 10,
            compteur: 30,
            timer: "",
            draw: function (ctx) {
                ctx.fillRect(this.x, this.y, this.width, this.height);
            },
            clear: function (ctx) {
                ctx.clearRect(this.x, this.y, this.width, this.height);
            },
            update: function (ctx) {
                this.compteur--;
                if (this.compteur > 0) {
                    this.clear(ctx);
                    this.x += 10;
                    this.draw(ctx);
                } else {
                    clearInterval(this.timer);
                }
            }
        }, {
            x: 0,
            y: 20,
            width: 10,
            height: 10,
            compteur: 30,
            timer: "",
            draw: function (ctx) {
                ctx.fillRect(this.x, this.y, this.width, this.height);
            },
            clear: function (ctx) {
                ctx.clearRect(this.x, this.y, this.width, this.height);
            },
            update: function (ctx) {
                this.compteur--;
                if (this.compteur > 0) {
                    this.clear(ctx);
                    this.x += 10;
                    this.draw(ctx);
                } else {
                    clearInterval(this.timer);
                }
            }
        }
    ]

    setTimeout(go1, 4000, objets);

    function go1(objets) {

        let canvas3 = document.getElementById('canvas3');
        if (canvas3.getContext) {
            let ctx = canvas3.getContext('2d');
            ctx.fillStyle = "red";
            for (let i = 0; i < objets.length; i++) {
                objets[i].draw(ctx);
            }

            for (let i = 0; i < objets.length; i++) {
                setTimeout(() => {
                    objets[i].timer = setInterval(objets[i].update.bind(objets[i]), 10, ctx);
                }, (i*1000));
            }

        }
    }

});