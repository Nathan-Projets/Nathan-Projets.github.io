window.onload = function () {
    var coinImage = new Image();
    coinImage.src = "/assets/image/coin-sprite-animation-sprite-sheet.png";

    coinImage.onload = function () {
        var canvas = document.getElementById('animatedElem');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            var coin = sprite({
                context: ctx,
                width: 50,
                height: 50,
                image: coinImage
            });

            gameLoop();


        }

        function sprite(options) {

            var that = {},
                frameIndex = 0,
                tickCount = 0,
                ticksPerFrame = 0,
                numberOfFrames = options.numberOfFrames || 1;

            that.context = options.context;
            that.width = options.width;
            that.height = options.height;
            that.image = options.image;
            that.loop = options.loop;

            that.render = function () {
                that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    200 - that.width / 2,
                    150 - that.height / 2,
                    that.width / numberOfFrames,
                    that.height
                );
            };

            that.update = function () {
                tickCount += 1;
                if (tickCount > ticksPerFrame) {
                    tickCount = 0;
                    if (frameIndex < numberOfFrames - 1) {
                        frameIndex += 1;
                    } else if (that.loop) {
                        frameIndex = 0;
                    }
                }
            };

            return that;
        }

        function gameLoop() {

            window.requestAnimationFrame(gameLoop);
            coin.update();
            coin.render();
        }
        coinImage.addEventListener("load", gameLoop);
    }
}