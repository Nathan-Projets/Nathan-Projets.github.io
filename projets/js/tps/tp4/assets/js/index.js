window.onload = function () {

    var canvas = document.getElementById('animatedElem');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var player = {
            x: 0,
            y: 0,
            width: 40,
            height: 40,
            image: "",
            ctx: ctx,
            draw: function () {
                this.ctx.fillRect(this.x, this.y, this.width, this.height);
            },
            clear: function () {
                this.ctx.clearRect(this.x, this.y, this.width, this.height);
            }
        };
        ctx.fillStyle = "blue";
        ctx.fillRect(player.x, player.y, player.width, player.height);

        gameLoop();
    }

    function gameLoop() {
        window.requestAnimationFrame(gameLoop);
        player.clear();
        player.draw();
    }

    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.key) {
            case "ArrowDown":
                if(player.y < canvas.height)
                player.clear();
                player.y += 10;
                player.draw();
                break;
            case "ArrowUp":
                player.clear();
                player.y -= 10;
                player.draw();
                break;
            case "ArrowLeft":
                player.clear();
                player.x -= 10;
                player.draw();
                break;
            case "ArrowRight":
                player.clear();
                player.x += 10;
                player.draw();
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }

        // Consume the event for suppressing "double action".
        event.preventDefault();
    }, true);


}