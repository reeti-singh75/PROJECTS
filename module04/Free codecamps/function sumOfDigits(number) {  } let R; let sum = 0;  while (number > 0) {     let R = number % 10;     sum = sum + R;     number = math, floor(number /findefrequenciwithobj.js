let arr = [2, 2, 3, 4, 3, 4, 5, 6];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == 1) {
        (obj[arr[i]]) ++;
    } else {
        obj[arr[i]] = 1
    }
}
console.log(obj);