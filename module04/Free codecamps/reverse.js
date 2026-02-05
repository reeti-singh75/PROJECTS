let a = "Learning never stops";
let s = "";
let b = "";
for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] != " ") {
        b = a[i] + b;

    } else {
        s += b + " ";
        b = "";

    }
}
s += b;
console.log(s);
// ============================================


// 
// ===================================================================================
// function romanToNumber(s) {
//     const a = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//     let total = 0;

//     for (let i = 0; i < s.length; i++) {
//         const c = a[s[i]];
//         const n = a[s[i + 1]];

//         if (c < n) total -= c;
//         else total += c;
//     }

//     return total;
// }

// console.log(romanToNumber("XIV"));
// console.log(romanToNumber("XX"));
// console.log(romanToNumber("MCMXC"));