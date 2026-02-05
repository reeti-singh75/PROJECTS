const readlineSync = require("readline-sync");
let num1=readlineSync.questionInt("Enter your number: ");
let num2 =readlineSync.questionInt("Enter your number: ");
let operator = readlineSync.question("Enter operator: ");

switch (operator) {
    case "+":
        console.log("add =", num1 + num2);
        break;

    case "-":
        console.log("add =", num1 + num2);
        break;

    case "%":
        console.log("moedulas =", num1 % num2);
        break;

     case "/":
        console.log("divide =", num1 / num2);
        break;

     case "*":
        console.log("multiple =", num1 * num2);
          break;

    default:
        console.log("invalid oprator");


}