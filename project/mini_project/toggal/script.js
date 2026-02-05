let body = document.getElementById("body");
let toggle = document.getElementById("toggale");
let togglechanger = document.getElementById("changetoggale");

let flag = false;

togglechanger.addEventListener("click", function () {
    if (flag == false) {
        body.style.background = "black";
        flag = true;
    } else {
        body.style.background = "white";
        flag = false;
    }

});

