function findThirdMax(num1, num2, num3, num4) {
    //  Only change code below this line
    if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
        return num3;
    } else if (num2 >= num3 && num2 >= num4) {
        return num3;
    } else {
        (num3 >= num4)
        return num1;
    }
}
console.log(findThirdMax(5, 4, 6, 7))