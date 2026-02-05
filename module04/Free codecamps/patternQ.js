function printPattern(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += "*".repeat(arr[i]) + "\n";
    }
    return result.trim();
}
console.log(printPattern([2, 3, 5, 2, 1]));