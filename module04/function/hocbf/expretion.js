
// find max number an array [2,3,4,10,7,9] =10


let readlinesync=require("readline-sync");
let array =readlinesync.question("Enter array : ").split(",").map(Number);

let findmax=(array)=>{

let max=array[0];
for(let i=0;i<array.length;i++){

    if(array[i]>max){
     max=array[i];
    }
}1
return max;
}
console.log("The max number is ",findmax(array));
