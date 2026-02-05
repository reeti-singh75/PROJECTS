// let n = 1010;
// let r = 0;
// let p = 0;
// let d = 0;

// while (n !== 0) {
//     r = n % 10;
//     d = d + r * Math.pow(2, p);
//     p++;
//     n = Math.floor(n / 10);
// }

// console.log(d);
// =============================================================================

// let n = 1111;
// let r = 0;
// let p = 1;
// let d = 0;
// while (n !== 0) {
//     r = n % 10;
//     d = d + r * p;
//     p = p * 2;
//     n = (n - (n % 10)) / 10;
// }
// console.log(d);
// ================================================================================

// let panagram = "QWERTYUIOPasdfghjklZXCVBNM";
// let a = panagram.toLowerCase();
// let c = "0";
// for (let i = 0; i < a.length; i++) {
//     if (a[i] == 'a' || a[i] == 'b' || a[i] == 'c' || a[i] == 'd' || a[i] == 'e' || a[i] == 'f' || a[i] == 'g' || a[i] == 'h' || a[i] == 'i' || a[i] == 'j' || a[i] == 'k' || a[i] == 'l' || a[i] == 'm' || a[i] == 'n' || a[i] == 'o' || a[i] == 'p' || a[i] == 'p' || a[i] == 'q' || a[i] == 'r' || a[i] == 's' || a[i] == 't' || a[i] == 'u' || a[i] == 'v' ||
//         a[i] == 'w' || a[i] == 'x' || a[i] == 'y' || a[i] == 'z') {

//         c++;
//     } else {
//         continue;
//     }
// }
// if (c == "26") {
//     console.log("YES");

// } else {
//     console.log("NO");

// }
// ==============================================================
// let panagram = "QWERTYUIOPasfghjklZXCVBNM";
// let a = panagram.toLowerCase();
// let c = "0";
// let b = "qwertyuiopasdfghjklzxcvbnm"
// for (let i = 0; i < a.length; i++) {
//     if (a.includes(b[i])) {

//         c++;
//     } else {
//         continue;
//     }
// }
// if (c == "26") {
//     console.log("YES");

// } else {
//     console.log("NO");

// }==============================================================================================




// function isPowerOfTwo(n) {
//     if (n < 1) return false;

//     while (n % 2 === 0) {
//         n = n / 2;
//     }

//     return n === 1;
// }

// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(32)); 
// =====================================
// let n = 32;
// if (n < 1) {
//     console.log(false);
// }
// let i = 1
// while (i < n) {
//     i = i * 2;
// }
// if (i == n) {
//     console.log("YES")

// } else {
//     console.log("No")

// }
// ==========================================
// const obj = { a: 1, b: 2, c: 3 };

// console.log(Object.entries(obj));
// =======================================
// const obj = {
//     D: 1,
//     B: 2,
//     C: 3,
// };
// console.log(Object.entries(obj));


// const obj = { D: 1, B: 2, C: 3 };
// let arr = [];
// for (const key in obj) {

//     arr.push([key, obj[key]])

// }
// console.log(arr);
//  === === === === === === === === === === ==

let a = [0, 0, 20, 5]
let m = [0.25, 0.10, 0.05, 0.01];
let s = 0;
let b = 0;
for (let i = 0; i < a.length; i++) {
    s = a[i] * m[i];
    b = b + s;
}
if (4.25 <= b) {
    console.log(true);
} else {
    console.log(false);
}