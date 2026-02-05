const readlineSync=require("readline-sync");
let day=readlineSync.questionInt("Enter your day :  ");

switch(day){
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
       console.log("Tuesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saterday");
        break;

    default:
        console.log("Invlide day");
      
}