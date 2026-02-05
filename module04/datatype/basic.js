// Question 1 Function  typeof
// ======================================================================

// function checkType(value) {
//     return typeof value;

// }

// console.log(checkType(123));
// console.log(checkType("Hello"));
// console.log(checkType(true));
// console.log(checkType([1, 2, 3]));
// console.log(checkType(undefined));
// ============================================================================
// Question 2 Arrow Function
// ================================================================================

// const checkType = (value) => typeof value;
// console.log(checkType("Reeti"));
// ================================================================================

// let x = null;
// console.log(typeof x);
// =================================
// let str = "Hello";
// console.log(typeof str); // "string"
// ==========================================

// let num = 42;
// console.log(typeof num); // "number"
// ==================================================


// let big = BigInt("123456789012345678901234567890");
// console.log(typeof big); // "bigint"
// ================================================================


// let isReady = true;
// console.log(typeof isReady); // "boolean"
// ===================================================


// let a;
// console.log(typeof a); // "undefined"
// ===========================================

// let empty = null;
// console.log(typeof empty); // "object" ❗ (JavaScript  bug)
// 
// 
// =======================================================


// let sym = Symbol("id");
// console.log(typeof sym); // "symbol"

// ============================================================


// let arr = [1, 2, 3];
// console.log(typeof arr); // "object"
// 
// ===================================================

// function greet() { return "Hi"; }
// console.log(typeof greet); // function

// ===================================================


// let date = new Date();
// console.log(typeof date); //"object"

// ===================================================


// const person = { name: "Reeti", age: 20 };
// console.log(typeof person); // "object"
// // ===================================================



// const fruits = ["Apple", "Banana", "Mango"];
// console.log(typeof fruits); // "object"

// // ===================================================


// const today = new Date();
// console.log(typeof today); // "object"

// // ===================================================


// const myMap = new Map();
// myMap.set("name", "Reeti");
// console.log(typeof myMap); // "object"

// // ===================================================


// const mySet = new Set();
// mySet.add("Apple");
// console.log(typeof mySet); // "object"

// // ===================================================


// const promise = new Promise((resolve, reject) => {
//     resolve("done");
// });
// console.log(typeof promise); // "object"



// // ===================================================


// const intArr = new Int8Array(2);
// console.log(typeof intArr); // "object"



// // ===================================================


// function sayHello() {
//     return "Hello!";
// }

// console.log(typeof sayHello);
// // Output: "function"


// // ===================================================





// const greet = () => "Hi!";
// console.log(typeof greet);
// // Output: "function"


// // ===================================================


// console.log(typeof
//     function() {});
// // Output: "function" // 


// // ===================================================


// let a = 1234;

// console.log(typeof a);
// // ===================================================
// let a = 50;
// let b = String(a);
// console.log(b); // Output: "50" (string)

// // ===================================================

// let a = 50;
// let b = String(a);
// console.log(b); // Output: "50" (string)


// // ===================================================

// let a = "";
// let b = Boolean(a);
// console.log(b); // Output: false (empty string → false)


// // ===================================================
// let user = "Reeti \v Singh";
// console.log(user);


// // ===================================================


// let user = "Reeti \n Singh";
// console.log(user);

// // ===================================================

// let user = "Reeti SS\bingh";
// console.log(user);

// // ===================================================

// let bool = 5 > 6;
// console.log(bool);

// // ===================================================

// let bool = 5 > 6;
// console.log(typeof bool);


// // ===================================================

// let user = null;
// console.log(user);

// // ===================================================


// let user = null;
// console.log(typeof user);



// // ===================================================

// let user
// console.log(user);



// // ===================================================
// let user
// console.log(typeof user);
// // =================================================== Type Conversion (Explicit Conversion)
// //1. To String Conversion

// let num = 123;
// console.log(String(num)); // "123"
// console.log((true).toString()); // "true"
// console.log((3.14159).toFixed(2)); // "3.14"

// // ===================================================

// let num = 123;
// console.log(typeof String(num)); // "123"
// console.log(typeof(true).toString()); // "true"
// console.log(typeof(3.14159).toFixed(2)); // "3.14"

// // ===================================================

// let str = "100";
// console.log(Number(str)); // 100
// console.log(parseInt("123px")); // 123
// console.log(parseFloat("3.14")); // 3.14
// console.log(Number(null)); // 0
// console.log(Number("abc")); // NaN

// // ===================================================

let str = "100";
console.log(typeof Number(str)); // 100
console.log(typeof parseInt("123px")); // 123
console.log(typeof parseFloat("3.14")); // 3.14
console.log(typeof Number(null)); // 0
console.log(typeof Number("abc")); // NaN

// // ===================================================
// // ===================================================
// // ===================================================
// // ===================================================
// // ===================================================
// // ===================================================
// // ===================================================
// // ===================================================
// // ===================================================
// // ===================================================


// let str = "123";
// let num = Number(str); // "123" → 123
// console.log(num); // Output: 123 (number)

// let n = 10;
// let str2 = String(n); // 10 → "10"
// console.log(str2); // Output: "10" (string)

// let value = 0;
// let boolVal = Boolean(value); // 0 → false
// console.log(boolVal); // Output: false (boolean)



///// let a = "5" + 1; // एक value string है, तो JS दोनों को string बना देता है
// console.log(a); // Output: "51" (string)

// let b = "5" - 1; // "-" operator दोनों को number बना देता है
// console.log(b); // Output: 4 (number)

// let c = true + 1; // true → 1, तो 1 + 1 = 2
// console.log(c); // Output: 2 (number)

// let d = null + 5; // null → 0, तो 0 + 5 = 5
// console.log(d); // Output: 5
// 
// 
// =======================================================================

// let x;
// console.log(x, typeof x);
// x = 8;
// console.log(x, typeof x);
// x = x + "";
// console.log(x, typeof x);
// x = x - 2;

// console.log(x, typeof x);

// x = x + 2;
// console.log(x, typeof x);

// x = +x + 2;
// console.log(x, typeof x);

// x = !x;
// console.log(x, typeof x);




// console.log(Boolean(7));

// console.log(Boolean(-7));

// console.log(Boolean(0));


// console.log(Boolean(null));

// console.log(Boolean(undefined));


// let x = Number("123 Reeti"); //NaN
// console.log(x);



// let x = parseInt("123 Reeti"); //123
// console.log(x);


// let x = parseInt("N123 Reeti"); //NaN
// console.log(x);

const date = new Date("2002-2-4");
console.log(date);