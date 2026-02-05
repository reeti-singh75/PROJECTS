function countDigits(num) {
    if (num === 0) return 1; // Special case for 0
    return Math.floor(Math.log10(Math.abs(num))) + 1; // Main logic
}
console.log(countDigits(456)); // Output: 1
console.log(countDigits(0)); // Output: 1
console.log(countDigits(987458321)); // Output: 9