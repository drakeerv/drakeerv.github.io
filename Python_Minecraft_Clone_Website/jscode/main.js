var prev_key = null;

function init(e) {
    initdownload(e);
    initsticky(e);
    document.addEventListener('keypress', keyhandler);
}

function keyhandler (e) {
    if((e.keyCode == 97 || prev_key == 97) && (e.keyCode == 101 || prev_key == 101)) {
        var icon = document.getElementById("icon")
        icon.setAttribute("href", "assets/egg.ico")
        console.log("Easter Egg :D");
    }
    prev_key = e.keyCode;
}

function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}