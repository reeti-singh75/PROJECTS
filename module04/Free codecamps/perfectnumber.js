function perfectNumberCheck(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    if (sum === num) {
        return "Yes";
    } else {
        return "No"
    }
}
console.log(perfectNumberCheck(6));
console.log(perfectNumberCheck(12));
console.log(perfectNumberCheck(28));