// === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === =






// function twosortedmerge(a1, a2) {
//     let r = [];
//     let i = 0;
//     let j = 0;
//     while (i < a1.length && j < a2.length) {
//         if (a1[i] < a2[j]) {
//             r.push(a1[i]);
//             i++;
//         } else {
//             r.push(a2[j]);
//             j++;
//         }
//     }
//     while (i < a1.length) {
//         r.push(a1[i]);
//         i++;
//     }
//     while (j < a2.length) {
//         r.push(a2[j]);
//         j++;

//     }
//     console.log(r);


// }
// twosortedmerge([1, 3, 5], [2, 4, 6])
//     === === === === === === === === === === === === === === === === === === === === === === === === === === === ===



// function frequency(a) {
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] == -1) continue;
//         let c = 1;

//         for (let b = i + 1; b < a.length; b++) {
//             if (a[i] == a[b]) {
//                 c++;
//                 a[b] = -1;
//             }


//         }
//         if (c > 0) {
//             console.log(a[i], -c);
//         }


//     }
// }
// frequency([1, 2, 2, 3, 1, 4]);


// =======================================================================================


// function counteven(a) {
//     let c = 0;
//     for (let i = 0; i < a.length; i++) {

//         if (a[i] % 2 == 0) {
//             c++;
//         }
//     }
//     return c;
// }

// console.log(counteven([1, 2, 4, 7, 10]));
// =====================================================================================================


// ========================================================================================================
// ===================================================================================


// function findMaxMin(arr) {
//     let max = arr[0];
//     let min = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }

//     console.log(max, min);;
// }

// findMaxMin([2, 5, 1, 9, 3])



// ==================================================================================================================


// function reverse(a) {
//     let a1 = [];
//     for (let i = a.length - 1; i >= 0; i--) {
//         a1.push(a[i]);

//     }
//     return a1;
// }
// console.log(reverse([3, 5, 2, 9, 1]));


// ========================================================================================================================


// function Rotate(a) {
//     let n = a.length;
//     let rotated = [];

//     for (let i = 1; i < n; i++) {
//         rotated.push(a[i]);
//     }


//     rotated.push(a[0]);

//     console.log(rotated);

// }



// Rotate([1, 2, 3, 4, 5]);

// ==============================================================================================




// function common(a, b) {
//     let i = 0;
//     let j = 0;
//     let str = " ";
//     while (i < a.length && j < b.length) {
//         if (a[i] == b[j]) {
//             str += b[j];
//             b[j] = -1;
//             j++;

//         } else {



//         }
//     }
//     console.log(str);

// }
// common([1, 2, 2, 3], [2, 3, 4]);




// ============================================================================================================ 




// function common(a1, a2) {
//     let r = [];
//     for (let i = 0; i < a1.length; i++) {

//         for (let j = 0; j < a2.length; j++) {

//             if (a1[i] === a2[j]) {
//                 let k;
//                 for (k = 0; k < r.length; k++) {
//                     if (r[k] === a1[i]) {
//                         break;
//                     }
//                 }
//                 if (k === r.length) {
//                     r[r.length] = a1[i];
//                 }
//             }

//         }
//     }
//     return r;

// }
// let a1 = [1, 2, 2, 3];
// let a2 = [2, 3, 4];
// console.log(common(a1, a2));


// ===============================================================================

// const a1 = [1, 2, 3, , 5, ];
// const a2 = [3, 4, 5, 6];
// let res = a1.filter((val) => {
//     return a2.includes(val)
// })
// console.log(res);

// ================================================================


// function common(a1, a2) {
//     let r = [];
//     for (let i = 0; i < a1.length; i++) {
//         for (let j = 0; j < a2.length; j++) {
//             if (a1[i] === a2[j]) {
//                 let k;
//                 for (k = 0; k < r.length; k++) {
//                     if (r[k] === a1[i]) {
//                         break;
//                     }
//                 }
//                 if (k === r.length) {
//                     r[r.length] = a1[i]
//                 }
//             }
//         }

//     }
//     return r;
// }
// let a1 = [1, 2, 2, 3];
// let a2 = [2, 3, 4];
// console.log(common(a1, a2));

// =======================================================================================================


// function Rotate(a) {
//     let n = a.length;
//     let r = [];
//     for (let i = 1; i < a.length; i++) {
//         r.push(a[i]);
//     }
//     r.push(a[0]);
//     console.log(r);

// }
// Rotate([1, 2, 3, 4, 5]);

// ===============================================================================

// function findMaxMin(a) {
//     let max = a[0];
//     let min = a[0];
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] > max) max = a[i];
//         if (a[i] < min) min = a[i];
//     }
//     console.log(max, min);


// }
// findMaxMin([1, 2, 3, 4, 5, 6, 7, 8, 9])











// function twosortedmerge(a1, a2) {
//     let r = [];
//     let i = 0;
//     let j = 0;
//     while (i < a1.length && j < a2.length) {
//         if (a1[i] < a2[j]) {
//             r.push(a1[i]);
//             i++;
//         } else {
//             r.push(a2[j]);
//             j++;
//         }
//     }
//     while (i < a1.length) {
//         r.push(a1[i]);
//         i++;
//     }
//     while (j < a2.length) {
//         r.push(a2[j]);
//         j++;

//     }
//     console.log(r);


// }
// twosortedmerge([1, 3, 5], [2, 4, 6])
//     === === === === === === === === === === === === === === === === === === === === === === === === === === === ===



// function frequency(a) {
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] == -1) continue;
//         let c = 1;

//         for (let b = i + 1; b < a.length; b++) {
//             if (a[i] == a[b]) {
//                 c++;
//                 a[b] = -1;
//             }


//         }
//         if (c > 0) {
//             console.log(a[i], -c);
//         }


//     }
// }
// frequency([1, 2, 2, 3, 1, 4]);
// =============================================================================

// function frequency(a) {
//     for (let i = 0; i < a.length; i++) {
//         let c = 1;
//         if (a[i] == -1) continue;
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] == a[j]) {
//                 c++;
//                 a[j] = -1;

//             }
//         }
//         if (c >= 1) {
//             console.log(a[i], -c);

//         }

//     }


// }

// frequency([1, 2, 3, 4, 5, 6, 2, 5, 6]);

function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacci(8)); // [0,1,1,2,3,5,8,13]




// function isPalindrome(num) {
//     let originalNum = num;
//     let reversed = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         reversed = reversed * 10 + digit; // reversed को build करना
//         num = Math.floor(num / 10);
//     }

//     return originalNum === reversed;
// }

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false





// function isArmstrong(num) {
//     let originalNum = num;
//     let sum = 0;
//     let digits = 0;
//     let temp = num;

//     while (temp > 0) {
//         digits++;
//         temp = Math.floor(temp / 10);
//     }

//     temp = num;
//     while (temp > 0) {
//         let digit = temp % 10;
//         let power = 1;
//         for (let i = 0; i < digits; i++) {
//             power *= digit; // digit का digits times multiplication
//         }
//         sum += power;
//         temp = Math.floor(temp / 10);
//     }

//     return sum === originalNum;
// }

// console.log(isArmstrong(153)); // true
// console.log(isArmstrong(123)); // false






// function isEven(n) {
//     if (n % 2 == 0) {
//         console.log("yes");

//     }
//     console.log("No");

// }
// isEven(9);
// =================================================================

// function sumofdigits(n) {
//     let s = 0;
//     let r = 0;
//     while (n != 0) {
//         r = n % 10;
//         s = s + r;
//         n = Math.floor(n / 10);
//     }
//     // console.log(s);
//     return s;

// }
// console.log(sumofdigits(897));
// sumofdigits(897)