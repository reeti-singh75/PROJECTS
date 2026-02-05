function printNameMultipleTimes(number, name) {
    let result = [];
    for (let i = 0; i < number; i++) {
        // result.push(name);
        result[i] = name;
    }
    return result;
}
console.log(printNameMultipleTimes(2, "Bedanti"));