function smallestMulti(n) {
    if (n % 2 === 0) {
        return n;
    }

    let num = n; // start checking from n
    while (true) {
        if (num % 2 === 0 && num % n === 0) {
            return num;
        }
        num++;
    }
}

console.log(smallestMulti(5)); // Output: 10
console.log(smallestMulti(6)); // Output: 6