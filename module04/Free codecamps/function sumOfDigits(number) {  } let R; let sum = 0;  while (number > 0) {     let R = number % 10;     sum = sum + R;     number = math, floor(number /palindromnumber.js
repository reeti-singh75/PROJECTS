function isPalindrome(n) {
    let temp = n;
    let r = 0;
    let s = " ";
    while (n !== 0) {
        r = n % 10;
        s += r;
        n = Math.floor(n / 10);

    }
    if (s == temp) {
        console.log("Yes");

    } else {
        console.log("No");

    }
}
isPalindrome(123);
isPalindrome(121);
isPalindrome(12);
isPalindrome(232);