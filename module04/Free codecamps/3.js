// function diamondArrays(n) {
//     let result = [];

//     for (let i = 1; i <= n; i++) {
//         result.push(Array(i).fill(i));
//     }

//     for (let i = n - 1; i >= 1; i--) {
//         result.push(Array(i).fill(i));
//     }

//     return result;
// }

// console.log(diamondArrays(15));




// function findgreternumber(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
// findgreternumber((5, 8));


// let a = 5;
// let b = 6;
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);

// }


// var birthday = 22;
// var birthdaymonth = "may"
// var birthyear = 1999



// 2 javascript test
// let arr = [1, 2, 1, 4, 5]
// let count = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] <= arr[i + 1]) {
//         continue;
//     } else {
//         count++;
//     }
// }
// if (count > 0) {
//     console.log("no");

// } else {
//     console.log("yes");

// }


// 3. javascript
let arr = [1, 2, 3, 4, 5];
let arr1 = [];
// let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        if (j == i) {
            continue;
        } else {
            sum += arr[j];
            console.log(sum);

        }
    }
    // console.log(sum);
    arr1.push(sum);

}
console.log(arr1);
// console.log(sum);