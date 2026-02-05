let s = [1, 2, 3, 4];
for (let i = 0; i < s.length; i++) {
    let a = [];
    for (let j = i; j < s.length; j++) {
        a.push(s[j]);
        console.log(a);

    }
}