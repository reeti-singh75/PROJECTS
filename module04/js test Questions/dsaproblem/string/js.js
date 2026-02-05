`` // ======================================================================


// // function boolean(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == "0") {

//             console.log(false); 

//         } else {

//             console.log(true);

//         }
//     }
// }
// boolean("1010101");
// 
// 
// =======================================================================

// function maxnumber(a) {
//     let max = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (max < a[i]) {
//             max = a[i];
//         } else {
//             max = max;
//         }
//     }
//     return max;
// }
// console.log(maxnumber([3, 4, 5, 8, ]));

// =======================================================================

// function unicnumber(a) {
//     let arr = [];
//     for (let i = 0; i < a.length; i++) {
//         let count = 1;
//         if (a[i] !== -1) {
//             for (let j = i + 1; j < a.length; j++) {

//                 if (a[i] == a[j]) {
//                     count++;
//                     a[j] = -1;
//                 }

//             }
//             if (count === 1) {
//                 arr.push(a[i]);
//             }

//         }
//     }
//     return arr;
// }


// // let rese = unicnumber([1, 2, 7, 4, 5, 1, 2, 7, 3, 4, ]);
// // console.log(rese);



// console.log(unicnumber([1, 2, 7, 4, 5, 1, 2, 7, 3, 4, ]));


// =======================================================================

// function sumofcubes(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum = a[i] ** 3 + sum;

//     }
//     console.log(sum);
// }
// sumofcubes([1, 5, 9])


// =======================================================================

// function phonenumberformattting(arr) {
//     if (arr.length === 10) {
//         let result = "";
//         let first = "";
//         let second = "";
//         let third = "";

//         for (let i = 0; i < 3; i++) {
//             first += arr[i]
//         }
//         for (let j = 3; j < 6; j++) {
//             second += arr[j];
//         }
//         for (let k = 6; k < 10; k++) {
//             third += arr[k];
//         }
//         result += "(" + first + ") " + second + " - " + third;
//         return result;
//     }
// }
// console.log(phonenumberformattting([8, 5, 3, 4, 5, 6, 7, 8, 9, 0]));

// =======================================================================

// let currentDate = new Date();
// // let month = currentDate.toDateString();
// let month = currentDate.toLocaleDateString();
// console.log(month);

// let date1 = new Date("2025-01-25");
// let date2 = new Date("2025-02-10");
// let Difference = date2 - date1;
// let Day = Difference / (1000 * 60 * 60 * 24);
// console.log(Day);







// =======================================================================


// function insertarray(a, b) {
//     let arr = [];
//     let c = 0;
//     for (let i = 0; i < a.length; i++) {
//         arr.push(a[i]);
//         if (c < 1) {
//             for (let j = 0; j < b.length; j++) {
//                 arr.push(b[j]);
//             }
//         }
//         c++;
//     }
//     return arr;

// }

// console.log(insertarray([[1, 2, ],[5, 6]], [ [3, 4]));

// =======================================================================

// function totalvalueofitem(a) {
//     let sum = 0;

//     for (let i = 0; i < a.length; i++) {
//         let multipale = 1;
//         for (let j = 0; j < i; j++) {
//             multipale = multipale * a[0, 0];
//             a[0, 0 + 1];
//         }
//         a[0 + 1];
//     }
//     return
// }
// console.log(totalvalueofitem([2, 3, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));

// =======================================================================
// function totalvalueofitem(arr) {
//     let result = [];
//     let sum = 0;
//     let m = 0;
//     for (let j = 0; j < arr.length; j++) {
//         let k = 1;
//         for (let i = 0; i < arr[j].length; i++) {
//             // console.log(arr[j][i]);
//             k = k * arr[j][i];

//             // console.log(m);
//         }
//         sum = sum + k;
//     }
//     return sum;
// }
// let value = totalvalueofitem([
//     [2, 2, 2, 8, 9, 3, 4, 5, ],
//     [2, 1, 1]
// ]);
// console.log(value);


// =======================================================================
// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//         total += arg;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3));
// // Expected output: 6

// console.log(sum(1, 2, 3, 4));
// // Expected output: 10

// =======================================================================

// let word = "apple";
// console.log(word[2]);


// function oddeven(a) {
//     let q = 0;
//     if (a.length % 2 == 0) {
//         q = a.length / 2;
//         console.log(a[q], a[q - 1]);
//     } else {
//         q = Math.floor(a.length / 2);
//         console.log(a[q], );
//     }

// }
// oddeven("apall");


// =======================================================================


// let word = "apple";
// console.log(word[2]);


// =======================================================================
// function sale(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         let c = 1;
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[j] !== -1) {
//                 if (a[i] == a[j]) {
//                     c++;
//                     a[j] = -1;
//                 }
//             }
//         }
//         sum += Math.floor(c / 2);

//     }
//     console.log(sum);
// }
// sale([10, 20, 20, 10, 10, 30, 50, 10, ]);
// sale([10, 10, 30, 20, ]);
// sale([10, 20, 20, 10, 10, 30, 50, 10, 20]);
// sale([50, 20, 30, 90, 30, 20, 50, 20, 90]);
// sale([]);
// =======================================================================

// function multiples(num1, num2) {
//     let result = [];
//     let c = 0;

//     for (let i = 1; i <= num2; i++) {
//         c = num1 * i;
//         result.push(c);
//     }
//     console.log(result);
// }

// multiples(7, 10);

// =======================================================================A = [1,2,3,4,5,6,7,8,9,0]
// A = [1,2,3,4,5,6,7,8,9,0]
// s = ''
// "
// i = 0
// while (i < len(A)):
//     if i < 3 or(i < 6 and i >= 4) or(i < 9 and i >= 7):
//     s = s + str(A[i])

// elif i == 3:
//     s = "(" + s + ')' + ' '
// s = s + str(A[i])

// elif i == 6:
//     s = s + "-"
// s = s + str(A[i])

// i = i + 1

// print(s) //
// //===============================================================================


// function phonenumber(a) {
//     let s = "";
//     let i = 0;
//     while (i < a.length) {

//         if (i < 3 || (4 <= i && i < 6) || (7 <= i && i < 10)) {
//             s = s + String(a[i])
//         } else if (i == 3) {
//             s = "(" + s + ')' + ' '
//             s = s + String(a[i])
//         } else if (i == 6) {
//             s = s + "-"
//             s = s + String(a[i])
//         }

//         i++;

//     }
//     console.log(s);

// }

// phonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// =======================================================================
// academic Question 1 10 july 2025


// function samemaxfector(a, b, c) {
//     let result = "";
//     let max = Math.max((a, b, c));
//     for (let i = 1; i <= max; i++) {
//         if (a % i == 0 && b % i == 0 && c % i == 0) {
//             result = i, " ,";
//         }
//     }
//     result = Math.max(result);
//     console.log(result);


// }

// samemaxfector(4, 2, 6);
// samemaxfector(7, 5, 3);
// samemaxfector(34, 68, 17);
// samemaxfector(6, 9, 12);
// samemaxfector(20, 30, 40);






// let str = "123456";
// let isAllDigit = true;

// for (let i = 0; i < str.length; i++) {
//     if (!/\d/.test(str[i])) {
//         isAllDigit = false;
//         break;
//     }
// }

// console.log("All digits?", isAllDigit);

// let str = "4567";
// let isAllDigit = true;

// for (let i = 0; i < str.length; i++) {
//     if (!"0123456789".includes(str[i])) {
//         isAllDigit = false;
//         break;
//     }
// }

// console.log("All digits?", isAllDigit);

// =======================================================================

// academic Question 2

// function validzipcode(a) {
//     let isAllDigit = true;
//     if (a.length <= 5) {
//         for (let i = 0; i <= a.length - 1; i++) {
//             if (!"0123456789".includes(a[i])) {
//                 isAllDigit = false;
//                 break;
//             }
//         }
//     } else {
//         isAllDigit = false;
//     }
//     return isAllDigit
// }

// console.log(validzipcode("5 011"));


// =======================================================================

// js test month jun-july 1st Question

// function majority(a) {
//     let l = Math.ceil(a.length / 2);
//     let max = 0;
//     let index = "-1";
//     let str = [];
//     for (let i = 0; i < a.length; i++) {
//         let c = 1;
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] == -1) {
//                 continue;
//             } else {
//                 if (a[i] == a[j]) {
//                     c = c + 1;
//                     a[j] = -1;
//                 }
//             }
//         }
//         if (max < c) {
//             max = c;
//             index = a[i];
//         }
//     }
//     if (max >= l) {
//         console.log(index);
//     } else {
//         console.log("-1");
//     }
// }
// majority([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 6, 7])
// =======================================================================
// js test month jun-july 1st Question

// function sublongaraay(a, k) {
//     let long = 0;
//     // let lenth = 1; 

//     for (let i = 0; i < a.length; i++) {
//         let b = 0;
//         let lenth = 1;
//         for (let j = i + 1; j < a.length; j++) {
//             if (b < k)
//                 if (a[i] == -1) {
//                     continue;
//                 } else {
//                     if (a[i] == a[j]) {
//                         lenth = lenth + 1;
//                         a[j] = -1;
//                     } else {
//                         lenth = lenth + 1;
//                         a[j] = -1;
//                         b++;
//                     }
//                 }
//         }
//         if (long < lenth) {
//             long = lenth;
//         }
//     }
//     console.log(long);

// }
// sublongaraay("aabbcccccccccc", 2);
// =======================================================================
//bobale short 1

// function sort(a) {
//     let them = 0;
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             if (a[j] > a[j + 1]) {
//                 them = a[j];
//                 a[j] = a[j + 1];
//                 a[j + 1] = them;
//             }
//         }
//     }
//     return a;
// }
// console.log(sort([5, 6, 8, 3, 2, 1]));




// =======================================================================
//2 Insertion Sort
// let arr = [5, 2, 9, 1, 3];
// for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > current) {
//         arr[j + 1] = arr[j];
//         j--;
//     }
//     arr[j + 1] = current;

// }
// console.log(arr);


// =======================================================================
// let arr = [5, 2, 9, 1, 3];

// for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {


//         if (arr[j] < arr[minIndex]) {

//             minIndex = j;
//         }
//     }
//     // Swap
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
// }

// console.log(arr); // [1, 2, 3, 5, 9]


// // =======================================================================
// let arr = [5, 2, 9, 1, 3];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             // Swap
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log("Descending:", arr); // [9, 5, 3, 2, 1]

// 16/07/2025 1.=======================================================================

// function multipale(n1, n2) {
//     let m = [];
//     for (let i = 1; i <= n2; i++) {
//         let n = n1 * i;
//         m.push(n);

//     }
//     console.log(m);

// }
// multipale(7, 5)


//  16/07/2025 2.=======================================================================

// function asendingorder(a) {

//     for (let i = 0; i < a.length; i++) {
//         let j = i + 1;
//         if (typeof a[j] !== "string") {
//             if (a[i] > a[j]) {
//                 return false;
//             }
//         } else {
//             return "String not permitted";
//         }

//     }
//     return true;

// }
// console.log(asendingorder([1, 2, 3, "4"]));



// 16/07/2025 3. =========================================================

// function isogram(a) {
//     let s = a.toLowerCase();

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             if (s[i] == s[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(isogram("Algorism"));

// =======================================================================


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {


//         if (arr[j] > arr[minIndex]) {

//             minIndex = j;
//         }
//     }
//     // Swap
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
// }

// console.log(arr); // [1, 2, 3, 5, 9]


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < a.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[j] > a[min]) {
//             min = j;
//         }
//     }
//     let temp = a[i];
//     a[i] = a[min];
//     a[min] = temp;
// }

// console.log(a);
// =======================================================================
//2 bubale Sort

// let arr = [5, 4, 3, 2, 1];
// let temp = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             console.log(arr[j + 1]);

//             temp = arr[j + 1];
//             arr[j + 1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);
// =======================================================================

// let arr = [5, 4, 3, 2, 8, 9, 7, 6, 10, 1];

// for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[min]) {
//             min = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = temp;
// }
// console.log(arr)

// =======================================================================
// let a = "num12";
// console.log(a.match(/\d/));


// let a = "num12";
// let digits = a.replace(/\D/g, "");
// console.log(digits);


// function digitalRoot(n) {
//     while (n >= 10) {
//         let sum = 0;
//         while (n > 0) {
//             sum += n % 10;
//             n = Math.floor(n / 10);
//         }
//         n = sum;
//     }
//     return n;
// }


// console.log(digitalRoot(9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)); // Output: 9



// =======================================================================


// function alicecookies(a) {
//     let c = 0;
//     let b = 5;
//     // let result = 0;
//     for (let j = 0; true; j++) {
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] !== b && b > a[i]) {
//                 return c;
//             }
//         }
//         b++;
//         c++;
//     }
// }
// console.log(alicecookies([10, 5, 3]));












// =======================================================================
// function targetsum(a) {
//     let target = 9;
//     for (let i = 0; i < a.length; i++) {
//         let j = i + 1;
//         let index = [i, j];
//         let sum = a[i] + a[j];
//         if (sum == target) {
//             return index;
//         }
//     }
// }
// // console.log(targetsum([4, 5, 6, 2, 9]));
// console.log(targetsum([4, 6, 2, 9, 5]));
// =======================================================================
// function targetsum(a) {
//     let target = 9;
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             let index = [i, j];
//             // let sum = a[i] + a[j];
//             if (a[i] + a[j] == target) {
//                 return index;
//             }
//         }
//     }
// }
// console.log(targetsum([4, 5, 6, 2, 9]));
// console.log(targetsum([4, 6, 2, 9, 5]));
// =======================================================================
// data = {

//     a: 10,
//     b: "yello",
//     c: 20,
//     d: "true",
//     e: 15
// }
// let sum = 0;
// for (key in data) {
//     if (typeof data[key] == "number") {
//         sum = sum + data[key];
//     }
// }
// console.log(sum);

// =======================================================================

// let arr = [1, 2, [3, 4], 5, [7, 0]];
// let a = [];
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//     let s = arr[i].length;
//     if (s !== undefined) {
//         for (let j = 0; j < s; j++) {
//             a[index] = arr[i][j];
//             index++;
//         }
//     } else {
//         a[index] = arr[i];
//         index++
//     }
//     console.log(a)
// }
// // console.log(a);
// =======================================================================
// let arr = [1, 2, [3, 4], 5, 6];
// let a = [];
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length !== undefined) {
//         for (let j = 0; j < arr[i].length; j++) {
//             a[index] = arr[i][j];
//             index++;
//         }
//     } else {
//         a[index] = arr[i];
//         index++
//     }
//     // console.log(a)
// }
// console.log(a)
// =======================================================================

// let a = [1, 2, 3, 4];
// let b = [1, 2, 3, 4];
// // let a = 3;
// // let b = 3;
// // let result = (a == b) ? "true" : "false"
// let result = (a == b) ? true : false
// console.log(result);

// =======================================================================

// console.log([] + {}); //[object object]

// =======================================================================

// console.log([] + []); //kuch print nhi karega

// =======================================================================
// console.log([] + ""); //kuch print nhi karega


// =======================================================================

// console.log([] + "" + []); //kuch print nhi karega
// =======================================================================

// console.log([
//     [
//         [
//             [
//                 [
//                     [
//                         [
//                             [
//                                 [
//                                     [
//                                         [
//                                             [
//                                                 [
//                                                     [
//                                                         [
//                                                             []
//                                                         ]
//                                                     ]
//                                                 ]
//                                             ]
//                                         ]
//                                     ]
//                                 ]
//                             ]
//                         ]
//                     ]
//                 ]
//             ]
//         ]
//     ]
// ]); //[[[Array]]]
// =======================================================================


// console.log([
//     [
//         [
//             [
//                 [
//                     []
//                 ]
//             ]
//         ]
//     ]
// ]); //kuch print nhi karega
// =======================================================================

// console.log({} + {}); //kuch print nhi karega
// =======================================================================

// let num = [1, 2, 3];
// num = [1, 2, 3, 4, 5];
// let number = num;
// // num = [1, 2, 3, 4, 5];
// let result = (number == num) ? true : false
// number[5] = 5

// console.log(num);
// 
// 
// 
// 
// 
// 
// 
// 
// 
// // let num = 1729;
// let count = 0;
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {

//         if (i ** 3 + j ** 3 == num) {
//             count++;
//         }
//     }

// }
// console.log(count);

//======================================================================================


// let num = 1729;
// let count = 0;
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {

//         if (i ** 3 + j ** 3 == num) {
//             count++;
//         }
//     }

// }
// console.log(count);

//======================================================================================

// function parantheses(str) {
//     let arr = [];
//     let result = "yes";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
//             arr.push(str[i]);
//         } else {
//             if ((arr[arr.length - 1] === "{" && str[i] === "}") || (arr[arr.length - 1] === "[" && str[i] === "]") || (arr[arr.length - 1] === "(" && str[i] === ")")) {
//                 arr.pop();
//             }
//         }
//     }
//     if (arr.length === 0) {
//         return result;
//     } else {
//         result = "No";
//         return result;
//     }
// }



// console.log(parantheses("{{[]}"));

// console.log(parantheses("{[]})"));

//==========================================================================================
// a string we have to find the longest length elements if in string have same length in 2 or 3 element so we have to console first element



// let str = "lumxi is using canva";
// let len = 0;
// let result = 0;
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     let str1 = "";
//     let c = 0;
//     for (let j = 0; str[i] !== " "; j++) {

//         str1 = str1 + str[i];
//         c++;

//     }
//     if (len < c) {
//         len = c;
//         result = str1;
//     }
// }

// console.log(result, "=", len);



//=======================================================================================================================



let max = 0;
let arr = [2, 1, 4, 3];
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            max = i;
        }
    }
}
max = max + 1;
console.log(max);