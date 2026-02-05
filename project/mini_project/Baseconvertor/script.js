let input= document.getElementById("input");
let output= document.getElementById("output");
let add=document.getElementById("add");
let binary= document.getElementById("binary");
let octal= document.getElementById("octal");
let decimal= document.getElementById("dec");
let hexaDecimal= document.getElementById("hex");

// add.addEventListener("click",function(){
//   output.textContent=input.value;
// })


binary.addEventListener("click",function(){
  output.textContent=Number(input.value).toString(2);
});

octal.addEventListener("click",function(){
  output.textContent=Number(input.value).toString(8);
});

decimal.addEventListener("click",function(){
  output.textContent=Number(input.value).toString(10);
});

hexaDecimal.addEventListener("click",function(){
  output.textContent=Number(input.value).toString(16);
});


