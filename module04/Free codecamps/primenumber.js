function primeNumberCheck(num) {
    if (num <= 1) {
        console.log("No");
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
    primeNumberCheck(97);
    primeNumberCheck(49);
    primeNumberCheck(1);
    primeNumberCheck(2);

}