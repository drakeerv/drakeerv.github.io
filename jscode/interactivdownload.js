var text = document.createRange().createContextualFragment('<p class="fadeanimation" style="line-height:0px;">Get</p>').firstChild;
var icon = document.createRange().createContextualFragment('<img class="fadeanimation" src="assets/download.png" width=30>').firstChild;
var active = false;

async function downloadin(e) {
    if (active == false) {
        active = true;
        download = document.getElementById('download')
        child = download.firstChild;
        child.style.opacity = 0;
        download.innerHTML = '';
        child = download.appendChild(text);
        child.classList.remove("fadeanimation");
        child.style.opacity = 0;
        child.classList.add("fadeanimation")
        await sleep(50);
        child.style.opacity = 1;
    }
}

async function downloadout(e) {
    if (active == true) {
        active = false;
        download = document.getElementById('download')
        child = download.firstChild;
        child.style.opacity = 0;
        download.innerHTML = '';
        child = download.appendChild(icon);
        child.classList.remove("fadeanimation");
        child.style.opacity = 0;
        child.classList.add("fadeanimation")
        await sleep(50);
        child.style.opacity = 1;
    }
}

function initdownload(e) {
    download = document.getElementById('download')
    download.appendChild(icon)
}
