77.

// function findThirdMax(num1, num2, num3, num4) {
//     //  Only change code below this line
//     if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
//         return num3;
//     } else if (num2 >= num3 && num2 >= num4) {
//         return num3;
//     } else {
//         (num3 >= num4)
//         return num1;
//     }
// }
// console.log(findThirdMax(5, 4, 6, 7))



// 78.

// function calculateGrossSalary(basicSalary) {
//     //  Only change code below this line
//     if (basicSalary <= 10000 && basicSalary * 20 && basicSalary * 80) {
//         return 16000;
//     } else if (basicSalary <= 20000 && basicSalary * 25 && basicSalary * 90) {
//         return 36550;
//     } else(basicSalary > 20000 && basicSalary * 30 && basicSalary * 95)()
//     return;
// }
// console.log(calculateGrossSalary(17000))
// 79.

// function calculateElectricityBill(units) {
//     let bill = 0;

//     if (units <= 50) {
//         bill = units * 0.50;
//     } else if (units <= 150) {
//         bill = 50 * 0.50 + (units - 50) * 0.75;
//     } else {
//         bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
//     }

//     let surcharge = bill * 0.20;
//     let totalBill = bill + surcharge;

//     return parseFloat(totalBill.toFixed(2)); // Answer upto 2 decimal places
// }

// // Test cases
// console.log(calculateElectricityBill(100)); // Output: 75
// console.log(calculateElectricityBill(160)); // Output: 134.4
// console.log(calculateElectricityBill(200)); // Output: 192
// 80.


// function smallestMulti(n) {
//     if (n % 2 === 0) {
//         return n;
//     }

//     let num = n; // start checking from n
//     while (true) {
//         if (num % 2 === 0 && num % n === 0) {
//             return num;
//         }
//         num++;
//     }
// }

// console.log(smallestMulti(5)); // Output: 10
// console.log(smallestMulti(6)); // Output: 6

// 81.
// let myVar = 87;
// myVar++;
// console.log(myVar);


82.

let myvar = 11;
myVar--;
console.log(myvar);


// 83.

// function printNameMultipleTimes(number, name) {
//     let result = [];
//     for (let i = 0; i < number; i++) {
//         // result.push(name);
//         result[i] = name;
//     }
//     return result;
// }
// console.log(printNameMultipleTimes(2, "Bedanti"));


// 84.

// function printEvenNumbers(number) {
//     let result = [];
//     for (let i = 1; i < number; i++) {
//         if (i % 2 === 0) {
//             result.push(i); // सही तरीका: i को array में जोड़ो
//         }
//     }
//     return result;
// }
// 88
// console.log(printEvenNumbers(10)); // [2, 4, 6, 8]

// function countDigits(num) {
//     if (num === 0) return 1; // Special case for 0
//     return Math.floor(Math.log10(Math.abs(num))) + 1; // Main logic
// }
// console.log(countDigits(456)); // Output: 1
// console.log(countDigits(0)); // Output: 1
// console.log(countDigits(987458321)); // Output: 9


// 89.

// function sumOfDigits(number) {

// }
// let R;
// let sum = 0;

// while (number > 0) {
//     let R = number % 10;
//     sum = sum + R;
//     number = math, floor(number / 10)

//     return sum;


// }

// sumOfDigits(456);

// 90.

// function reverseDigits(num) {
//     return Number(String(num).split('').reverse().join(''));
// }
// console.log(reverseDigits(478)); // 874
// console.log(typeof reverseDigits); // "function"


91.

// function primeNumberCheck(num) {
//     if (num <= 1) {
//         console.log("No");
//         return;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             console.log("No");
//             return;
//         }
//     }
//     console.log("Yes");
//     primeNumberCheck(97);
//     primeNumberCheck(49);
//     primeNumberCheck(1);
//     primeNumberCheck(2);

// }




// 93.

// function perfectNumberCheck(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             sum = sum + i;
//         }
//     }
//     if (sum === num) {
//         return "Yes";
//     } else {
//         return "No"
//     }
// }
// console.log(perfectNumberCheck(6));
// console.log(perfectNumberCheck(12));
// console.log(perfectNumberCheck(28));

95.
let myArray = ["Hello", 42];
console.log(Array.isArray(myArray));
console.log(typeof myArray[0]);
console.log(typeof myArray[1]);
96.

// function createArray(n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(createArray(5));
// console.log(createArray(10));

97.
let myArray = ["apple", 10, true];
let myData = myArray[0];
98.
100.
// const L = [23, 45, 71, 90];

// function reverseAndPrintArray(arr) {
//     const reversedArray = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//         console.log(arr[i]);
//     }

//     return reversedArray;
// }

// reverseAndPrintArray(L);
101.

// function oddEvenSum(arr) {

//     let oddSum = 0;
//     let evenSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenSum += arr[i];
//         } else {
//             oddSum += arr[i];
//         }
//     }

//     return [oddSum, evenSum];


// }

// const inputArray = [23, 45, 32, 25, 46, 33, 71, 90];
// const result = oddEvenSum(inputArray);
// console.log(result[0]);
// console.log(result[1]);
// 105.



































1
1