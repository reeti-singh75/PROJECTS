let input= document.getElementById("input");
let binary= document.getElementById("binary");
let octal= document.getElementById("octal");
let decimal= document.getElementById("decimal");
let hex= document.getElementById("hex");
let output=document.getElementById("output");


binary.addEventListener("click",function(){
    let values=Number(input.value);
    output.textContent = values.toString(16);
})

binary.addEventListener("click",function(){
    let values=Number(input.value);
    output.textContent = values.toString(16);
});



let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(p => {
  p.style.color = "black";
});



