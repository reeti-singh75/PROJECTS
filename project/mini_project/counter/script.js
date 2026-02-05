let increase = document.getElementById("increase");
let display = document.getElementById("display");
let decrease = document.getElementById("decrease");

let count = 0;
increase.addEventListener("click", function () {
    count++;
    display.innerText = count
    if(count>0){
        decrease.disabled=false;
    }
})

decrease.addEventListener("click", function () {
    if (count === 0) {
        decrease.disabled = true;
    } else {
        // decrease.disabled = false
        count--;
        display.innerText = count
    }
})