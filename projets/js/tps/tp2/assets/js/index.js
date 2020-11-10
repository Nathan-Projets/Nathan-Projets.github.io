var compteurElem = document.getElementById("compteur");
var image = document.getElementById("image");
var i = 10;

function decremente() {
    if(i > 0) {
        i -= 1;
        compteurElem.innerText = i;
    } else {
        clearInterval(timer);
        image.src = "assets/image/update-arrow.svg";
        image.addEventListener("click", function() {
            clearInterval(timer);
            image.src = "assets/image/stopwatch.svg";
            i = 10;
            compteurElem.innerText = i;
            timer = setInterval('decremente()', 1000);
            this.removeEventListener("click", function(){});
        });
    }
}

var timer = setInterval(decremente, 1000);