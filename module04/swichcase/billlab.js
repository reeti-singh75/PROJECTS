const readlineSync=require("readline-sync");
let chargeRate=readlineSync.question("Enter your Quantity :  ");

switch(true){
    case(chargeRate<=0&&chargeRate<=100):
        console.log("No Charge");
        break;
    
    case(chargeRate<100&&chargeRate<201):
        console.log("7 repees unit");
        break;

    case(chargeRate<=201&&chargeRate<=300):
        console.log("10 repees unit");
        break;

    default:
        console.log("please inter valide unit");
        


}