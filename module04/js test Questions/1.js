// // let n = 110011;
// // let r = 0;
// // let p = 1;
// // let o = 0;
// // while (n !== 0) {
// //     r = n % 10;
// //     o = o + r * p;
// //     p = p * 2
// //     n = n - ((n % 10)) / 10;

// // }
// // console.log(o);


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
// // console.log(d);
// let rr = 0;
// let k = 1;
// let o = 0;
// while (d != 0) {
//     rr = d % 10;
//     o = o + rr + k;
//     d = (d - )
// =====================================================

// let _ = "hello";
// console.log(_); // Output: 

// console.log(x); // Output: undefined
// var x = 5
// ;
// 
// 
// ==========================================

// let n = 1011;
// let r = 0;
// let p = 1;
// let d = 0;
// while (n !== 0) {
//     r = n % 10;
//     d = d + r * p;
//     p = p * 2;
//     n = (n - (n % 10)) / 10;
// }
// let o = "";
// while (d != 0) {
//     rs = d % 8;
//     o = rs + o;
//     d = Math.floor(d / 8);
// }
// console.log(o); 
// === === === === === === === === === === === === === === === === === === === === === ===



// function numberinstring(a) {
//     let r = [];
//     for (let j = 0; j < a.length; j++) {
//         let str = a[j];
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] >= '0' && str[i] <= '9') {
//                 r.push(a[j]);
//                 break;
//             }
//         }

//     }
//     return r;
// }
// console.log(numberinstring(["1a", "a", "2b", "b"]));
// ======================================
// let arr = ["a", "ab", "ac", "a1", "ad", "s2"];

// let result = arr.filter(item => /\d/.test(item));

// console.log(result);

// ====================================================

// function numberinstring(arr) {
//     let result = arr.filter(item => /\d/.test(item));
//     return result;
// }
// console.log(numberinstring(["ab2", "ghy", "as", "asd3", ]));
// ==============================================================
function brokenkeyboard(a) {
    let c = [];
    let b = "happy birthday";
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i] && !c.includes(b[i])) {
            c.push(b[i]);
        }

    }
    return JSON.stringify(c);
}
console.log(brokenkeyboard("hawwy birthday"));
// =======================================================
// let c = { name: "Reeti", age: 25 };
// let result = JSON.stringify(c);
// console.log(result);
// // Output: '{"name":"Reeti","age":25}'let age = 18;



// let age = 18;
// let canVote = (age >= 20) ? "Yes" : "No";
// console.log(canVote); // Output: Yes