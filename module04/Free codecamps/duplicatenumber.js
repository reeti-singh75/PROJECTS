function findDuplicates(size, arr) {

    let seen = {};
    let duplicates = new Set();

    for (let i = 0; i < size; i++) {
        if (seen[arr[i]]) {
            duplicates.add(arr[i]);
        } else {
            seen[arr[i]] = true;
        }
    }

    return [...duplicates].sort((a, b) => a - b).join(" ");
}

console.log(findDuplicates(5, [2, 4, 2, 6, 3]));
console.log(findDuplicates(6, [2, 4, 6, 3, 3, 2]));