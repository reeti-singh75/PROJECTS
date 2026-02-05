function createArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(createArray(5));
console.log(createArray(10));