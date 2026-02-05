//  let n = 153;
//  let them = n;
//  let r = 0;
//  let sum = 0;
//  let p = 0;

//  while (n > 0) {
//      r = n % 10;
//      p = r ** 3;
//      sum = sum + p;

//      n = Math.floor(n / 10);
//  }
//  if (sum == them) {
//      console.log(true);
//  } else {
//      console.log(false);
//  }
// 
// ============================================================


// function are(n) {
//     let them = n;
//     let r = 0;
//     let sum = 0;
//     let p = 0;

//     while (n > 0) {
//         r = n % 10;
//         p = r ** 3;
//         sum = sum + p;

//         n = Math.floor(n / 10);
//     }
//     if (sum == them) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(are(153));
// ========================================================================


// function Perfectsquare(n) {
//     let i = 1;
//     while (i <= n) {
//         i = i * i;
//         i++;
//     }
//     if (i == n) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(Perfectsquare(49));\
// 
// 
// =======================================================================



// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let pn = [];
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//     let c = 0;
//     for (let j = 1; j <= a[i]; j++) {
//         if (a[i] % j == 0) {
//             c = c + 1;


//         }
//     }
//     if (c == 2) {
//         pn.push(a[i]);
//         count = count + 1;
//     }
// }
// console.log(pn, "=", count);
// 
// 
// ===============================================================


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = [];
// let min = 3;
// let max = 8;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > min && a[i] < max) {
//         b.push(a[i]);
//     }

// }
// console.log(b);
// ========================================================================================


// function multiplication(n1, n2) {
//     let a = n1 * n2;
//     return a;
// }
// console.log(multiplication(230, 10));

// ==================================================================

// function duplicate(a) {
//     let b = [];
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] == a[j] && !b.includes(a[j])) {

//                 b.push(a[j])
//                 j++;
//             }
//         }
//     }
//     return b;
// }
// console.log(duplicate([1, 2, 3, 4, 5, 2, 2, 2, 4]));
// =======================================================

// function duplicate(a) {
//     let b = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== -1) {

//             for (let j = i + 1; j < a.length; j++) {
//                 if (a[i] == a[j]) {
//                     b.push(a[j]);
//                     a[j] = -1;

//                 }
//             }
//         }
//     }
//     return b;
// }

// console.log(duplicate([1, 2, 3, 4, 5, 2, 2, 4]));
// ===================================================================================
// function parfectnumber(n) {
//     let s = 0;
//     for (let i = 0; i < n; i++) {
//         if (n % i == 0) {
//             s = s + i;
//         }
//     }
//     if (s == n) {
//         console.log("Yes");

//     } else {
//         console.log("No");

//     }


// }
// parfectnumber(9)
// ===========================================================================================================


// const date = new Date(2000, 11, 24);
// const D = date;

// if (D.getMonth() == 11 && D.getDate() == 24) {
//     console.log(true);

// } else {
//     console.log(false);

// }


// console.log(D);

// console.log(date.getMonth());
// console.log(date.getDate());


// console.log(date);
// ===========================================================
// const date = new Date(2005, 6, 12);
// let age = today.getFullYear(2025, 5, 18) - birthDate.getFullYear(2005, 6, 12);
// console.log(age);
// 
// 
// =========================================================================


// function shortarr(a) {

//     for (let i = 0; i < a.length; i++) {
//         let j = a[i + 1];
//         if (a[i] > a[j]) {
//             them = a[i];
//             a[i] = a[j];
//             a[j] = a[i];
//         } else {
//             them = a[j];
//             a[j] = a[i];
//             a[i] = a[j];
//         }
//     }
//     return a;

// }
// console.log(shortarr([9, 8, 6, 5, 2, 3, 1]));
// ==============================================================

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9];
let c = [];
while (i < a && j < b) {
    if (i < a) {
        c.push(a[i])
        i++;
        c++;
    } else {
        c.push(b[j])
        j++;
        c++;
    }
}
console.log(c);