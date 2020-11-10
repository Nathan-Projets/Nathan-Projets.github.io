var compteurElem = document.getElementById("compteur");
var i = 10;

function decremente() {
    console.log(i);
    if(i > 0) {
        i -= 1;
        compteurElem.innerText = i;
    } else {
        clearInterval(timer);
    }
    
}

var timer = setInterval('decremente()', 1000);