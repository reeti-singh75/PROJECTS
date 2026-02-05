function common(a1, a2) {
    let r = [];
    for (let i = 0; i < a1.length; i++) {

        for (let j = 0; j < a2.length; j++) {

            if (a1[i] === a2[j]) {
                let k;
                for (k = 0; k < r.length; k++) {
                    if (r[k] === a1[i]) {
                        break;
                    }
                }
                if (k === r.length) {
                    r[r.length] = a1[i];
                }
            }

        }
    }
    return r;

}
let a1 = [1, 2, 2, 3];
let a2 = [2, 3, 4];
console.log(common(a1, a2));


// ================================================================================================

// const a1 = [1, 2, 3, , 5, ];
// const a2 = [3, 4, 5, 6];
// let res = a1.filter((val) => {
//     return a2.includes(val)
// })
// console.log(res);