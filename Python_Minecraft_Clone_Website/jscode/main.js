var egg = new Egg();
var egg_audio = new Audio("assets/egg.mp3")
egg_audio.play();

function init(e) {
    initdownload(e)
    egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
        egg_audio.play();
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}