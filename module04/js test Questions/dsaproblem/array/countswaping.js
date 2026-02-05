// // let arr = [4, 3, 2, 1];
// // let c = 0;
// // let temp = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     let small = arr[i];
// //     for (j = 0; j < arr.length; j++) {
// //         if (arr[j] > arr[j + 1]) {

// //         }
// //     }
// //     c = c + 1;
// // }

// // console.log(c);






// // let arr = [4, 3, 2, 1];
// // let c = 0;

// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length - 1; j++) { // -1 ताकि arr[j+1] safe रहे
// //         if (arr[j] > arr[j + 1]) {
// //             // actual swap
// //             let temp = arr[j];
// //             arr[j] = arr[j + 1];
// //             arr[j + 1] = temp;

// //             // swap count 
// //             c++;
// //         }
// //     }
// // }

// // console.log("Sorted Array:", arr);
// // console.log("Total Swaps:", c);







// // let arr = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
// // let c = 0;

// // // sorted array बनाकर mapping बना लो
// // let sorted = [...arr].sort((a, b) => a - b);

// // // हर element को उसकी सही जगह पर भेजो
// // for (let i = 0; i < arr.length; i++) {
// //     while (arr[i] !== sorted[i]) {
// //         // element को उसकी सही जगह पर भेजना
// //         let correctIndex = sorted.indexOf(arr[i]);
// //         let temp = arr[i];
// //         arr[i] = arr[correctIndex];
// //         arr[correctIndex] = temp;

// //         c++;
// //     }
// // }

// // console.log("Minimum Swaps:", c);




// let arr = [4, 3, 2, 4, 5, 2, 7, 100, 99999, 765432, 23456, 345, 1];
// let c = 0;

// // sorted array बनाओ
// let sorted = [...arr].sort((a, b) => a - b);

// // हर element का सही index map में store कर लो
// let indexMap = {};
// for (let i = 0; i < sorted.length; i++) {
//     indexMap[sorted[i]] = i;
// }

// // अब swaps count करो
// for (let i = 0; i < arr.length; i++) {
//     while (arr[i] !== sorted[i]) {
//         let correctIndex = indexMap[arr[i]];

//         // swap
//         let temp = arr[i];
//         arr[i] = arr[correctIndex];
//         arr[correctIndex] = temp;

//         c++;
//     }
// }

// console.log("Minimum Swaps:", c);



//=================================================================


// let a = [4, 3, 2, 4, 5, 2, 7, 100, 99999, 765432, 23456, 345, 1];

// let max = Math.max(...a);
// let arr = a.filter(num => num < max);
// let max1 = Math.max(...arr);
// console.log(max + max1);

//====================================================================



// let a = [0, 0, 1, 1, 1];
// let a = [0, 1, 0, 1, 0, 1, 0, 1];


// function countsubbarray(a) {
//     let count1 = 0;
//     let count2 = 0;
//     let result = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 0) {
//             count1++;
//         } else {
//             count2++;
//         }
//     }
//     if (count1 === count2) {
//         result = count1 * 2;
//     } else if (count1 < count2) {
//         result = count1 * 2;
//     } else {
//         result = count2 * 2;
//     }
//     return result;
// }
// console.log(countsubbarray([0, 0, 1, 1, 1]));
// console.log(countsubbarray([0, 1, 0, 1, 0, 1, 0, 1]));





let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let length = arr.length;
let result = length * (length + 1) / 2;
console.log(result);




// function countsubbarray(a) {
//     let count1 = 0;
//     let count2 = 0;
//     let result = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 0) {
//             count1++;
//         } else {
//             count2++;
//         }
//     }
//     if (count1 === count2) {
//         result = count1 * 2;
//     } else if (count1 < count2) {
//         result = count1 * 2;
//     } else {
//         result = count2 * 2;
//     }
//     return result;
// }
// console.log(countsubbarray([0, 0, 1, 1, 1]));
// console.log(countsubbarray([0, 1, 0, 1, 0, 1, 0, 1]));
// console.log(countsubbarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));