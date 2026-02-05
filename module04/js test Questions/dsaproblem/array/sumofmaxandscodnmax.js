let a = [4, 3, 2, 4, 5, 2, 7, 100, 99999, 765432, 23456, 345, 1];

let max = Math.max(...a);
let arr = a.filter(num => num < max);
let max1 = Math.max(...arr);
console.log(max + max1);