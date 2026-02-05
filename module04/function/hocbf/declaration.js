// check even or odd 

let readlinesync =require("readline-sync");
let number=readlinesync.questionInt("Enter number : ")
function isEven(number){
    if(number%2==0){
        console.log(true);
    }else{
        console.log(false);
    }
}
isEven(number);