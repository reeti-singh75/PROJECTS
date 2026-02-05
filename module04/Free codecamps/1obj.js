// let college = {
//     name: "MDP college katghora",
//     location: "katghora city korba cg",
//     cours: " bsc,bcom,art",

// }
// console.log(college.name);




// let obj = {

// }
// obj.name = "jyoti"
// obj.class = 12
// obj.name = "reeti"
// delete obj.class,
//     console.log(obj);

// ===
// === === === === === === === === === === === === === === === === === === === === === === === === === === === =



// const obj = {
//     shampoo: 1,
//     pencil: 30,
//     brush: 10,

// }
// let s = 0;
// for (let key in obj) {
//     //   console.log(obj[key]) 
//     s += obj[key];
// }
// if (s > 50) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// console.log(s)



// console.log(obj.price)
// console.log(obj['price'])
// for(let key in obj){
//     console.log(key +" : "+obj[key])
// }
//  obj.price = 50
// obj.city = 'jashpur'
// delete obj.price;
// console.log(obj)
// value acces = obj.value(obj);
// ======================================================================================================
// let n = [1, 2, 3];

// for (let i = 0; i < n.length; i++) {
//     for (let e = i; e < n.length; e++) {
//         let subarray = "";
//         for (let b = i; b <= e; b++) {
//             subarray += n[b] + " ";
//         }
//         console.log("Subarray:", subarray);
//     }
// }

// ========================================================
//
// imp Object.hasOwnpropetice












// const book = {
//     title: "JavaScript",
//     author: "Bob Steve",
//     pages: 200,

// }
// book.city = "jashpur "
//     // pages = 150
// for (let key in book) {
//     // console.log(book[key]);
//     console.log(key);

// }
// if ("title" in book) {
//     console.log(true);

// } else {
//     console.log(false);
// }



// book.publisher = "OpenAI Press"
// delete book.publisher;

// console.log(book);
// console.log(book["author"]);


// const car = {

// }
// car.brand = "Toyota"
// car.model = "Corolla"
// console.log(car);

// let a = "2";
// console.log(a); string acsses

// ========================================================

// let a = 'ab';
// let b = 'cd';
// let c = 'Navgurukul'
// console.log(a.concat(b));
// console.log(a.includes('b'));
// console.log(a.toUpperCase());
// console.log(c.slice(3, 10));
// ==================================================


// ===========================================
// let a = 'Hello,Jashpur students';
// let s = "";
// for (let i = a.length - 1; i >= 0; i--) {
//     s += a[i];
// }
// console.log(s);
// ================================================================let subarrey = [1, 2, 3];
// let s = [1, 2, 3, 4];
// for (let i = 0; i < s.length; i++) {
//     let a = [];
//     for (let j = 0; j <= i; j++) {
//         a += s[i];
//     }
//     console.log(a);


// } ===
// === === === === === === === === === === === === === === ==


// let s = [1, 2, 3, 4];
// for (let i = 0; i < s.length; i++) {
//     let a = [];
//     for (let j = i; j < s.length; j++) {
//         a.push(s[j]);
//         console.log(a);

//     }
// }

// ================================================================
// let a = 'Hello, Jashpur students';
// let s = "";
// let b = "";
// for (let i = a.length - 1; i >= 0; i--) {
//     let b = "";
//     b += a[i];
//     if (a[i] == " ") {
//         let c = "";
//         for (let j = b.length - 1; j >= 0; j--) {
//             // let c = "";
//             c += b[i];
//             s += c;
//         }
//         // s += c;
//     } else {
//         continue;
//     }
// }
// console.log(s);
// ===========================================


// let a = "Learning never stops.";
// let s = "";
// let b = "";
// for (let i = a.length - 1; i >= 0; i--) {
//     if (a[i] != " ") {
//         b = a[i] + b;
//     } else {
//         s += b + " ";
//         b = "";

//     }
// }
// s += b;
// console.log(s);