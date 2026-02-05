function isArmstrong(n) {
    let s = 0;
    let r = 0;
    let temp = n;
    while (n != 0) {
        r = n % 10;
        n = Math.floor(n / 10);
        // s = s + Math.pow(r, 3);
        s = s + r ** 3;

    }
    if (s == temp) {
        console.log("Yes");
    } else {
        console.log("No");

    }
}


isArmstrong(123);
isArmstrong(12);
isArmstrong(153);
isArmstrong(370);