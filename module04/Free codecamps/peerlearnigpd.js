// function checkEvenorOdd(n) {
//     if (n % 2 === 0) {
//         console.log("Even");

//     } else {
//         console.log("Odd");

//     }
// }
// checkEvenorOdd(9); 
// === === === === === === === === === === === === === === === === === === === =


// let s = "navgurukul"
// let r = 0;
// let sum = 0;
// let temp = s;
// while (temp != 0) {
//     r = temp % 10;
//     temp = Math.floor(temp / 10)
// ====================================================
// let s = "navgurukul"
// let t = g;
// for (let i = 0; i < s.length; i++) {
//     if (s[g] == s[i]) {
//         console.log(s[i]);

//     }
// }
// ======================================================



// function findevowel(n) {
//     let c = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] == "a" || n[i] == "e" || n[i] == "i" || n[i] == "o" || n[i] == "u") {
//             c++;
//         } else {
//             continue;
//         }
//     }
//     console.log(c);

// }
// findevowel("navgurukul");
// 
// ==============================================================




// function reversestring(n) {
//     let a = " ";
//     for (let i = n.length - 1; i >= 0; i--) {
//         a += n[i];

//     }
//     console.log(a);

// }

// reversestring("navgurukul ");
// // =======================================================================
// function primeNumberCheck(num) {
//     if (num <= 1) {
//         console.log("No");

//     }
//     for (let i = 2; i <= num; i++) {
//         if (num % i === 0) {

//         }
//     }
//     console.log("Yes");
// }
// primeNumberCheck(97);
// primeNumberCheck(49);
// primeNumberCheck(1);
// primeNumberCheck(2);
// ====================================================================


// function palindrome(n) {
//     let temp = n;
//     let a = "";
//     for (let i = n.length - 1; i >= 0; i--) {
//         a += n[i];
//     }
//     if (temp == a) {
//         console.log("Yes");

//     } else {
//         console.log("No");


//     }
// }
// palindrome("madam");
// palindrome("sir");
// palindrome("dear");
// palindrome("lal");
// ================================================================


// let S = "nayan"
// let r = ""
// for (let i of S) {
//     console.log(i)
// }
// 
// ======================================================
// let a = 5;
// let s = 1;
// for (let i = 5; i > 0; i--) {
//     s = s * i;

// }
// console.log(s);

// 
// ============================================================
// function capitalizefirstletter(n) {
//     let cap = "";
//     cap += n[0].toUpperCase();
//     for (let i = 1; i < n.length; i++) {
//         if (n[i] == " ") {
//             cap = cap + " ";
//             cap = cap + n[i + 1].toUpperCase();
//             i = i + 1;
//         } else {
//             cap = cap + n[i];
//         }
//     }
//     console.log(cap);

// }
// let a = "i am a boy";
// capitalizefirstletter(a);
// ========================================================================


// for (let j = 1; j > 0; j++) {
//     let s = 0;
//     let n = j;
//     for (let n = 1; n < j; n++) {
//         if (j % n == 0) {
//             s = s + n;
//         }
//     }
//     if (s == j) {
//         console.log(n);

//     }
// }
// 
// ====================================================================================================
//
// let n = [1, 2, 3];

// for (let i = 0; i < n.length; i++) {
//     for (let e = i; e < n.length; e++) {
//         let subarray = "";
//         for (let b = i; b <= e; b++) {
//             subarray += n[b] + " ";
//         }
//         console.log("Subarray:", subarray.trim());
//     }
// } === === === === === === === === === === === === === === === === === === === === === === === === ===


// let obj = {
//     name: "rekha",
//     age: 25
// }
// console.log(obj[key]);
// console.log(obj["age"]);
// =================================================
// function fidemax(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[0] < a[1] && a[1] < a[2] && a[2] < a[3]) {
//             return a[3];
//         } else if (a[2] >= a[3]) {
//             return a[2];

//         }

//     }
// }
// console.log(fidemax([1, 2, 3, 4, 5]));
// console.log(fidemax([1, 2, 8, 4, 5]));
// console.log(fidemax([1, 2, 7, 4, 5]));
// console.log(fidemax([1, 8, 3, 7, 5]));
// =========================================================================


// function binaryToDecimal(binaryStr) {
//     let decimal = 0;
//     let power = 0;

//     for (let i = binaryStr.length - 1; i >= 0; i--) {
//         let bit = binaryStr[i];
//         if (bit === '1') {
//             decimal += Math.pow(2, power);
//         }
//         power++;
//     }
//     console.log(decimal);
// }