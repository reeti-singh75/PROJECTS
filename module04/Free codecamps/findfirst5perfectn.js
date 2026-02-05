for (let j = 1; j > 0; j++) {
    let s = 0;
    let n = j;
    for (let n = 1; n < j; n++) {
        if (j % n == 0) {
            s = s + n;
        }
    }
    if (s == j) {
        console.log(n);

    }
}