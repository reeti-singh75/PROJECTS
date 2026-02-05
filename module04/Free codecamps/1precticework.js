// // maerger arr




// function isprime(n) {
//     if (n <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isprime(7));
// console.log(isprime(71));
// console.log(isprime(27));
// console.log(isprime(17));





// function factor(n) {
//     let factor = [];
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             factor.push(i);

//         }
//     }
//     return factor;
// }
// console.log(factor(9));
// console.log(factor(45));
// console.log(factor(8));




// Function to find factors

// function findFactors(num) {
//     let factors = [];

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }

//     return factors;
// }

// console.log("Factors of 12:", findFactors(12));
// console.log("Factors of 28:", findFactors(28));
// console.log("Factors of 7:", findFactors(7));




// function shoping(order) {
//     let total = 0;

//     for (let item in order) {
//         total += order[item];
//     }

//     return total > 50;
// }


// console.log(shoping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })); // false
// console.log(shoping({ "TV": 399.99 })); // true
// console.log(shoping({ "Phone": 400 })); // true




// shoping


// function shoping(order) {
//     let total = 0;

//     for (let item in order) {
//         total += order[item]

//     }
//     return total < 50;
// }

// console.log(shoping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
// console.log(shoping({ "Shampoo": 500, "Rubber Ducks": 15.99 }));
// console.log(shoping({ "Shampoo": 80, "Rubber Ducks": 15.99 }));



//
// function printpattern(arr) {
//     let result = " ";
//     for (let i = 0; i < arr.length; i++) {
//         return result.trim();
//     }

// }
// console.log(printpattern[2, 3, 5, 2, 1]);



// function isprime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;


//         }
//     }
//     return true;
// }


// console.log(isprime(2));
// console.log(isprime(26));
// console.log(isprime(71));
// console.log(isprime(55));
// console.log(isprime(123));






// function printPattern(arr) {
//     let result = "";

//     for (let i = 0; i < arr.length; i++) {
//         result += ">".repeat(arr[i]) + "\n";
//     }


//     return result.trim();
// }

// console.log(printPattern([2, 3, 5, 2, 1]));







// function printPattern(arr) {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result += ">".repeat(arr[i]) + "\n";

//     }
//     return result;
// }
// console.log(printPattern([2, 3, 5, 2, 1, ]));







// function printPattern(arr) {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         return result += ">".repeat.arr[i] + "\n";
//     }
// }
// console.log(printPattern([]));


// function printPattern(n) {
//     str = "";
//     for (let i = 0; i < n.length; i++) {
//         // str = "";
//         for (let j = 0; j < n[i]; j++) {
//             str += ">";
//         }
//         console.log(str);

//     }
// }
// printPattern([2, 5, 6, 3, 4])




// function printPattern(n) {
//     for (let i = 0; i < n.length; i++) {
//         let str = "";
//         for (let j = 0; j < n[i]; j++) {
//             str += ">";

//         }
//         console.log(str);
//     }


// }



// printPattern([2, 5, 8, 6, 2])






// function fibonacci(n) {
//     let a = 0,
//         b = 1;

//     if (n === 0) return a;
//     if (n === 1) return b;

//     for (let i = 2; i <= n; i++) {
//         let next = a + b;
//         a = b;
//         b = next;
//     }

//     return b;
// }

// console.log(fibonacci(7)); // Output: 13




// function fibonacci(n) {
//     let a = 0,
//         b = 1,
//         temp;

//     for (let i = 2; i <= n; i++) {
//         temp = a + b;
//         a = b;
//         b = temp;
//     }

//     return n === 0 ? 0 : b;
// }

// console.log(fibonacci(7)); // Output: 13






// function isArmstrong(num) {
//     let strNum = num.toString();
//     let power = strNum.length;
//     let sum = 0;

//     for (let digit of strNum) {
//         sum += Math.pow(parseInt(digit), power);
//     }

//     return sum === num;
// }

// // Test examples
// console.log(isArmstrong(153)); // true
// console.log(isArmstrong(370)); // true
// console.log(isArmstrong(123)); // false




// function isPalindrome(num) {
//     let str = num.toString();
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// // Test examples
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(1331)); // true
// console.log(isPalindrome(123)); // false



// function findFrequency(arr) {
//     let freq = {};

//     for (let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;
//     }

//     return freq;
// }

// // Example:
// let numbers = [1, 2, 3, 2, 4, 1, 2, 5];
// console.log(findFrequency(numbers));


// function isprime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isprime(7));
// console.log(isprime(8));
// console.log(isprime(5));



// function factor(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(factor(45));
// console.log(factor(52));
// console.log(factor(76));



// function printPattern(arr) {
//     let result = "";

//     for (let i = 0; i < arr.length; i++) {
//         result += ">".repeat(arr[i]) + "\n";
//     }
//     return result;
// }
// console.log(printPattern([2, 3, 5, 4, 2]));





// function printPattern(n) {
//     for (let i = 0; i < n.legth; i++) {
//         let str = "";

//         for (let j = 0; j < n[i]; j++) {
//             str += ">";
//         }
//         console.log(str);
//     }
// }
// console.log(printPattern([2, 4, 5, 3, 6]));



// function printPattern(n) {

//     for (let i = 0; i < n.length; i++) {
//         let str = "";
//         for (let j = 0; j < n[i]; j++) {
//             str += ">";
//         }
//         console.log(str);

//     }
// }
// printPattern([2, 5, 6, 3, 4])




// function duplicate(n) {
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] == -1) {

//         } else {
//             for (let b = i + 1; b < n.length; b++) {
//                 let c = 0;
//                 let s = 0;
//                 if (n[i] == n[b]) {
//                     c = c++;
//                     n[b] == -1;
//                 } else {
//                     if (0 < c) {
//                         console.log(n[i]);


//                     }





//                 }
//             }

//         }

//     }
// }


// console.log(duplicate([1, 3, 5, 2, 3, 4]));


// function duplicate(n) {
//     for (let i = 0; i < n.length; i++) {
//         let c = 1;
//         if (n[i] == -1) continue;

//         for (let b = i + 1; b < n.length; b++) {
//             if (n[i] == n[b]) {
//                 c++;
//                 n[b] = -1;
//             }
//         }

//         if (c > 0) {
//             console.log(n[i], -c);

//             n[i] = -1;
//         }
//     }
// }

// duplicate([1, 3, 5, 5, 2, 1, 7, 9, 9, 2, 3, 4]);


// === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === =
// function merge(n) {
//     let r = [];
//     let i = 0;
//     let j = 0;

//     for (let i = )
// }




// ===
// === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===
// function duplicate(a) {
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] == -1) continue;
//         let c = 1;

//         for (let b = i + 1; b < a.length; b++) {
//             if (a[i] == a[b]) {
//                 c++;
//                 a[b] = -1;
//             }


//         }
//         if (c > 0) {
//             console.log(a[i], -c);
//         }


//     }
// }
// duplicate([1, 2, 3, 4, 5, 6, 1, 2, 3]);

// ===
// === === === === === === === === === === === === === === === === === === === === === === === === === === ===




// function merge(a1, a2) {
//     let r = [];
//     let i = 0;
//     let j = 0;
//     while (i < a1.length && j < a2.length) {
//         if (a1[i] < a2[j]) {
//             r.push(a1[i]);
//             i++;

//         } else {
//             r.push(a2[j]);
//             j++;
//         }
//     }
//     while (i < a1.length) {
//         r.push(a1[i]);
//         i++;
//     }
//     while (j < a2.length) {
//         r.push(a2[j]);
//         j++;

//     }
//     console.log(r);
// }

// merge([1, 4, 7, 8], [8, 5, 2]);
// ===
// === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ==


// function checktarget(size, arr, t) {
//     for (let i = 0; i, i < size; i++) {
//         if (arr[i] === t) {
//             return true;
//         }

//     }
//     return false;
// }
// console.log(checktarget(7, [1, 2, 3, 4, 5, 6], 3));


// ===============================================================================


// function groupanagrams(str) {

// }



// function groupAnagrams(strs) {
//     let map = {};

//     for (let i = 0; i < strs.length; i++) {
//         let word = strs[i];
//         let count = new Array(26).fill(0);

//         for (let j = 0; j < word.length; j++) {
//             let charCode = word.charCodeAt(j) - 97;
//             count[charCode]++;
//         }

//         let key = count.join(' ');

//         if (!map[key]) {
//             map[key] = [];
//         }

//         map[key].push(word);
//     }

//     let result = [];
//     for (let key in map) {
//         result.push(map[key]);
//     }

//     return result;
// }
// console.log(groupAnagrams("eat", "tea", "tan", "ate", "nat", "bat"));




// ====================================================


// function parfectnumber(n) {
//     let s = 0;
//     for (let i = 0; i < n; i++) {
//         if (n % i == 0) {
//             s = s + i;
//         }
//     }
//     if (s == n) {
//         console.log("Yes");

//     }

// }
// parfectnumber(6)
// 
// 
// =======================================================================
// function merge(a1, a2) {
//     let r = [];
//     let i = 0;
//     let j = 0;
//     while (i < a1.length && j < a2.length) {
//         if (a1[i] < a2[j]) {
//             r.push(a1[i]);
//             i++;

//         } else {
//             r.push(a2[j]);
//             j++;
//         }
//     }
//     while (i < a1.length) {
//         r.push(a1[i]);
//         i++;
//     }
//     while (j < a2.length) {
//         r.push(a2[j]);
//         j++;

//     }
// }
// console.log(merge([1, 2, 3, 4], [5, 6, 7, 8]));
// 
// ==================================================================


// function short(a) {
//     let b = [];
//     for (let i = 0; i < a.length - 1; i++) {
//         let j = i + 1;
//         if (a[i] < a[j]) {
//             b.push(a[i])
//         } else {
//             b.push(a[j])
//         }
//     }
//     return b;
// }
// console.log(short([9, 8, 7, 6, 5, 4, 3, 2, 1]));



// ;====================================================================
function sortArray(a) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    return a;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1]));