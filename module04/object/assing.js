
const readlinesyn=require("readline-sync");
let obj1=JSON.parse(readlinesyn.question("Enter your first object : "));
let obj2=JSON.parse(readlinesyn.question("Enter your second object : "));

//  Enter your first object : {"a":1,"b":2}
// Enter your second object : {"b":3,"d":4}

const assign=Object.assign({},obj1,obj2);//marge process
console.log(assign); //out put given { a: 1, b: 3, d: 4 } because object assign work left to right  b=1,is first and b=3 is last it is given last
