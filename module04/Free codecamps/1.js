// let a = 50;
// let b = 50;
// console.log(a + b);
// console.log("Hello User.");


// var a = 6;
// a = 45
// var a = 8;
// console.log(a);



// let c = 5;
// c = 10;
// let d = 9;
// console.log(c, d);



// const s = 456;
// // s = 987;
// // const s = 987;
// console.log(s);(n*(n+1/2)

// fungtion(DimondShapedArray)
// a = [1]
// b = [
//     [1],
//     [2, 2],
//     [1]
// ]
// result = []
// for (let i = 0; i > Number; i++) {
//     return Number;

//     console.loge(Number)
// }



// arr = [44, 46]
// arr2 = [45]
// arr3 = []

// function consi





// function findFrequency(a, size) {
//     let freq = {};
//     let order = [];
//     let ans = "";

//     for (let i = 0; i < size; i++) {
//         if (freq[a[i]] === undefined) {
//             freq[a[i]] = 1;
//             order.push(a[i]);
//         } else {
//             freq[a[i]]++;
//         }
//     }

//     for (let i = 0; i < order.length; i++) {
//         ans += order[i] + "=" + freq[order[i]];
//         if (i < order.length - 1) {
//             ans += ",";
//         }
//     }

//     return ans;
// }

// console.log(findFrequency([2, 4, 2, 6, 3, 6], 6))



// function findFrequency(a, size) {
//     let ans = "";

//     for (let i = 0; i < size; i++) {
//         let count = 1;
//         if (a[i] !== -1) {
//             for (let B = i + 1; B < size; B++) {
//                 if (a[i] == a[B]) {
//                     count++;
//                     a[B] = -1;
//                 }
//             }
//             ans += `${a[i]}=${count},`;
//         }
//     }


//     return ans;
// }

// console.log(findFrequency([2, 4, 2, 6, 3, 6], 6));


// function s() {
//     for (var i = 0; i < 5; i++) {
//         var color = 'red';
//     }
//     console.log(color);
// }
// s();
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


// function printPattern(arr) {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result += "*".repeat(arr[i]) + "\n";
//     }
//     return result.trim();
// }
// console.log(printPattern([2, 3, 5, 2, 1]));
// =========================================================


// let arr = [1, 2, 5];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     let a = [];
//     for (let j = i; j < arr.length; j++) {
//         a.push(arr[j]);
//         console.log(a);
//     }

// }



// ======================================

// let a = [1, 1, 1, 1, 2];
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length - i - 1; j++) {
//         if (a[j] > a[j + 1]) {
//             let temp = a[j];
//             a[j] = a[j + 1];
//             a[j + 1] = temp;
//         }
//     }

// }
// let allsame = true;
// for (let k = 0; k < a.length; k++) {

//     if (a[k] !== a[0]) {
//         allsame = false;
//         break;
//     }
// }
// if (allsame) {
//     console.log("-1");

// } else {
//     console.log("2");
// }

// }=============================================================

// let a = "i am beautiful";
// let cap = "";
// cap += a[0].toUpperCase();

// for (let i = 1; i < a.length; i++) {
//     if (a[i] == " ") {
//         cap += " ";
//         cap += a[i + 1].toLocaleUpperCase();
//         i = i + 1;

//     } else {
//         cap += a[i];

//     }
// }
// console.log(cap);
// =============================================================
// let n = "big fat bubbleb";
// let b = "b"
// let a = n;
// let c = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] == b) {
//         c++;
//     }
// }

// console.log(c);
// ===============================================================================

// let n = "string";
// let b = "";
// for (let i = 0; i < a.length; i++) {
//     b += a[i] + a[i]
// }

// console.log(b);
// ======================================================================================
// function n(n1, n2, n3) {
//     if (n1 == n2) {
//         if (n1 == n3)
//             m = "all same";
//     } else {
//         if (n1 == n3) {
//             m = "two same";

//         } else {
//             if (n1 > n2) {
//                 m = n1;
//             } else {
//                 m = n2;
//             }
//             if (m > n3) {
//                 m = m;
//             } else {
//                 m = n3
//             }
//             if (m % 2 == 0) {
//                 m = "even"
//             } else {
//                 m = "odd"
//             }
//         }
//     }
//     return m;
// }

// console.log(n(3, 2, 3))
// console.log(n(3, 2, 4))
// console.log(n(3, 3, 3));
// ===============================================================================================
// let day = 1;

// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// 
// ======================================================================================
function a(n) {
    let b = [];
    let p = n
    for (let i = n.length - 1; i >= 0; i--) {
        b.push(n[i]);

    }
    for (let j = 0; j < n.length; j++) {

        if (p[j] !== b[j]) {
            return false;
        }
        break;

    }
    return true;
}
console.log(a([1, 2, 3]));
console.log(a([1, 2, 8]));
console.log(a([1, 1, 1]));
console.log(a([1, 2, 1]));
console.log(a([5])); //===
// === === === === === === === === === === === === === === === === === === === === === === === === === === === =

// ===============================================================================================================

// let a = ["Adam", "Sarah", "Malcolm"];
// for (let i = 0; i < a.length; i++) {
//     a.filter(capital)

// }