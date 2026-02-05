function calculateElectricityBill(units) {
    let bill = 0;

    if (units <= 50) {
        bill = units * 0.50;
    } else if (units <= 150) {
        bill = 50 * 0.50 + (units - 50) * 0.75;
    } else {
        bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
    }

    let surcharge = bill * 0.20;
    let totalBill = bill + surcharge;

    return parseFloat(totalBill.toFixed(2)); // Answer upto 2 decimal places
}

// Test cases
console.log(calculateElectricityBill(100)); // Output: 75
console.log(calculateElectricityBill(160)); // Output: 134.4
console.log(calculateElectricityBill(200)); // Output: 192
80.