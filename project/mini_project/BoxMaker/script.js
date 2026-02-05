let button=document.getElementById("btn");
let container=document.getElementById("container");

container.style.display="flex";
container.style.flexWrap="wrap";
container.style.gap="10px";

button.addEventListener("click",function(){
    let box=document.createElement("div");
    box.style.width="100px";
    box.style.height="100px";
    box.style.background="blue";
    box.style.margin="10px";
    container.appendChild(box);
})