let body=document.getElementById("page");
let button=document.getElementById("toggleBtn");
let flag=false;

button.addEventListener("click",function(){
    if(flag==false){
        flag=true;
        body.style.background="purple";
    }else{
       body.style.background="white";
       flag=false;
    }
    

})
