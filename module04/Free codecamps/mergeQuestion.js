function mergeSortedArrays(arr1, arr2) {
    let r = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] < arr1[i]) {
            r.push(arr2[j]);
            j++;

        } else {
            r.push(arr1[i]);
            i++;

        }
    }
    while (i < arr1.length) {
        r.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        r.push(arr2[j]);
        j++;
    }
    console.log(r);
}

mergeSortedArrays([1, 2, 5, 6], [3, 4, 7, 9]);