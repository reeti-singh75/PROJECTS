const obj1={a:1,b:2};
const obj2={b:3,d:4};

let obj={...obj1,...obj2};// marge process jab key same hoti hai, to last wale object ki value overwrite (replace) kar deti hai.
console.log(obj);
