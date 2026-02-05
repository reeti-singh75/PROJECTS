function openApp(appId) {
    document.getElementById(appId).style.display = "flex";
}

function closeApp(appId) {
    document.getElementById(appId).style.display = "none";
}


function updateClock() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("clockDisplay").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();