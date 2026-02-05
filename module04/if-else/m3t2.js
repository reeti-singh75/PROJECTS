//  function frequency(a) {
//      for (let i = 0; i < a.length; i++) {
//          let c = 1;
//          if (a[i] == -1) continue;
//          for (let j = i + 1; j < a.length; j++) {
//              if (a[i] == a[j]) {
//                  c++;
//                  a[j] = -1;

//              }
//          }
//          if (c >= 1) {
//              console.log(a[i], -c);

//          }

//      }


//  }

//  frequency([1, 2, 3, 4, 5, 6, 2, 5, 6]);
// ============================================================================================================



// function isArmstrong(n) {
//     let s = 0;
//     let r = 0;
//     let temp = n;
//     while (n != 0) {
//         r = n % 10;
//         n = Math.floor(n / 10);
//         // s = s + Math.pow(r, 3);
//         s = s + r ** 3;

//     }
//     if (s == temp) {
//         console.log("Yes");
//     } else {
//         console.log("No");

//     }
// }


// isArmstrong(123);
// isArmstrong(12);
// isArmstrong(153);
// isArmstrong(370);
// ======================================================================================


// ===============================================================================================================


// function fibonacci(n) {
//     let a = 0;
//     let b = 0;
//     let c = 1;
//     for (let i = 0; i < n; i++) {
//         c = a + b;
//         console.log(a);
//         a = b;
//         b = c

//     }
// }
// fibonacci(8);
// ====================================================================================================

function findevowel(n) {
    let c = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] == "a" || n[i] == "e" || n[i] == "i" || n[i] == "o" || n[i] == "u") {
            c++;
        }
        // } else {
        //     continue;
        // }
    }
    console.log(c);

}
findevowel("navgurukul");
//  === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === == 


// function isPalindrome(n) {
//     let temp = n;
//     let r = 0;
//     let s = " ";
//     while (n !== 0) {
//         r = n % 10;
//         s += r;
//         n = Math.floor(n / 10);

//     }
//     if (s == temp) {
//         console.log("Yes");

//     } else {
//         console.log("No");

//     }
// }
// isPalindrome(123);
// isPalindrome(121);
// isPalindrome(12);
// isPalindrome(232);