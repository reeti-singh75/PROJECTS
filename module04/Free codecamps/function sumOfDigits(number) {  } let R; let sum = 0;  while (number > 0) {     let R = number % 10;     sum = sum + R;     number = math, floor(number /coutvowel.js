function findevowel(n) {
    let c = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] == "a" || n[i] == "e" || n[i] == "i" || n[i] == "o" || n[i] == "u") {
            c++;
        }
    }
    console.log(c);

}
findevowel("navgurukul");