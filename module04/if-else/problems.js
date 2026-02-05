// function isArmstrong(n) {
//     let s = 0;
//     let r = 0;
//     let temp = n;
//     while (n != 0) {
//         r = n % 10;
//         n = Math.floor(n / 10);
//         s = s + Math.pow(r, 3);

//     }
//     if (s == temp) {
//         console.log("Yes");
//     } else {
//         console.log("No");

//     }
// }


// isArmstrong(123);
// isArmstrong(12);
// isArmstrong(153);
// isArmstrong(370);

// ====================================================================================================

// function duplicate(a) {

//     for (let i = 0; i < a.length; i++) {
//         let c = 0;
//         if (a[i] == -1) continue;
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] == a[j]) {
//                 c++;
//                 a[j] = -1;
//             }

//         }
//         if (c >= 1) {
//             console.log(a[i]);
//         }
//     }
// }
// duplicate([1, 2, 3, 4, 5, 6, 1, 5, 3, 4])
// =========================================================================================

// function isPalindrome(n) {
//     let temp = n;
//     let rvs = 0;
//     let r = 0;
//     while (n !== 0) {
//         r = n % 10;
//         n = Math.floor(n / 10);
//         rvs = rvs * 10 + r;
//     }
//     if (rvs === temp) {
//         console.log("Yes");
//     } else {
//         console.log("No");

//     }
// }
// isPalindrome(123);
// isPalindrome(121);
// isPalindrome(12);
// isPalindrome(232);
// ===================================================================================================================


function fibonacci(n) {
    let a = 0;
    let b = 1;
}