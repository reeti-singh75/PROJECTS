// ---------- Make Windows Draggable ----------
function makeDraggable(el) {
    let offsetX, offsetY;
    const header = el.querySelector(".window-header");

    header.onmousedown = (e) => {
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;

        document.onmousemove = (e) => {
            el.style.left = e.clientX - offsetX + "px";
            el.style.top = e.clientY - offsetY + "px";
        };

        document.onmouseup = () => {
            document.onmousemove = null;
            saveWindowPosition(el);
        };
    };
}

// ---------- Save & Load Window Position ----------
function saveWindowPosition(el) {
    localStorage.setItem(el.id, JSON.stringify({ left: el.offsetLeft, top: el.offsetTop }));
}

function loadWindowPosition(el) {
    const pos = JSON.parse(localStorage.getItem(el.id));
    if (pos) {
        el.style.left = pos.left + "px";
        el.style.top = pos.top + "px";
    } else {
        el.style.left = "50px";
        el.style.top = "50px";
    }
}

// ---------- Notes App ----------
const notesWindow = document.getElementById("notesWindow");
const notesText = document.getElementById("notesText");
const notesBtn = createTaskbarIcon("notesWindow", "Notes");

notesText.value = localStorage.getItem("notes") || "";
notesText.addEventListener("input", () => {
    localStorage.setItem("notes", notesText.value);
});

// ---------- Clock App ----------
const clockWindow = document.getElementById("clockWindow");
const clockDisplay = document.getElementById("clock");
createTaskbarIcon("clockWindow", "Clock");

setInterval(() => {
    const now = new Date();
    clockDisplay.innerText = now.toLocaleTimeString();
}, 1000);

// ---------- Taskbar Icons ----------
function createTaskbarIcon(appId, appName) {
    const taskbar = document.getElementById("taskbar");
    const icon = document.createElement("div");
    icon.classList.add("taskbar-icon");
    icon.innerText = appName;
    icon.onclick = () => {
        const app = document.getElementById(appId);
        app.style.display = "block";
    }
    taskbar.appendChild(icon);
    return icon;
}

// ---------- Close Buttons ----------
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.onclick = (e) => {
        e.target.closest(".window").style.display = "none";
    }
});

// ---------- Initialize ----------
[notesWindow, clockWindow].forEach(win => {
    makeDraggable(win);
    loadWindowPosition(win);
});