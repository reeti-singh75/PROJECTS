// let number = 20;
// number = (number > 30) ? "greter than 30" : (number > 10) ? "between 11 and 20 " : "less than 10";
// console.log(number);



//========================================================



// function check(num) {
//     return (num % 2 == 0) ? "even" : "odd";
// };
// console.log(check(15))




///=================================================================== 
let str = [1, 1, 1, 1, 3, 3, 3, 34, 4, 4, 4];
let value = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
}
for (let i = 0; i < str.length; i++) {
    let count = 1;
    if (str[i] !== -1) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                count++;
                str[j] = -1;
            }
        }
        console.log(str[i], "=", count);
    }
}


// let count = 12;
// let value = {
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15
// }
// if (Object.values(value).includes(count)) {
//     let key = Object.keys(value).find(key => value[key] == count);
//     console.log(key);


// }


// console.log(Object.values(value));