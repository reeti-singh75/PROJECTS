function printEvenNumbers(number) {
    let result = [];
    for (let i = 1; i < number; i++) {
        if (i % 2 === 0) {
            result.push(i); // सही तरीका: i को array में जोड़ो
        }
    }
    return result;
}
console.log(printEvenNumbers(10));