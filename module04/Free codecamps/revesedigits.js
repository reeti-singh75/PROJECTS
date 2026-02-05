function reverseDigits(num) {
    return Number(String(num).split('').reverse().join(''));
}
console.log(reverseDigits(478)); // 874
console.log(typeof reverseDigits); // "function"