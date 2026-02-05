function fibonacci(n) {
    let a = 0;
    let b = 0;
    let c = 1;
    for (let i = 0; i < n; i++) {
        c = a + b;
        console.log(a);
        a = b;
        b = c

    }
}
fibonacci(8);