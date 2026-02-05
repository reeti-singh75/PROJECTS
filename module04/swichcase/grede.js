const readlineSync=require("readline-sync");
let marks=readlineSync.question("Enter your marks:  ");

switch(true){
 case (marks>89&&marks<=100):console.log("Your grade is A 🎉");
         break;
     
 case (marks>79):
        console.log("Your grade is B 🎉");
         break;
     
 case (marks>69):
        console.log("Your grade is C 🎉");
         break;
     
 case (marks>59):
        console.log("Your grade is D 🎉");
         break;
     
 default:
        console.log("Your grade is F");
     
}
