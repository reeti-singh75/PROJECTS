let ans = (10 > 5) ? "yes" : "no";
console.log(ans);


// condition ?  true expration :false exration;




// let str = "aaaaaaaaaaaaaa";
let count = 11;

let value = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    }
    // for (let i = 0; i < str.length; i++) {
    //     let count = 1;
    //     if (str[i] !== -1) {
    //         for (let j = i + 1; j < str.length; j++) {
    //             if (str[i] == str[j]) {
    //                 count++;
    //                 str[j] = -1;
    //             }
    //         }
    //         // console.log(str[i], "=", count);
    //         if (count >= 10) {
    //             if (Object.values(value).includes(count)) {
    //                 let key = Object.keys(value).find(key => value[key] == count);
    //                 console.log(key);



//             }
//         }
//     }
// }

// console.log(Object.values(value));




if (Object.values(value).includes(count)) {
    let key = Object.keys(value).find(key => value[key] == count);
    console.log(key);
}