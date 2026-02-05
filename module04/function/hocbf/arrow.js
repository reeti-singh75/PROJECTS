//add two  string


let readlinesync=require("readline-sync");
let name =readlinesync.question("Enter first name : ");
let sarname =readlinesync.question("Enter last name : ");

let result = "";
let concatenateString = (name,sarname) => {
    result = name +" "+ sarname;
    return result;
}

console.log(concatenateString(name,sarname));




