let arr = [5, 4, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > min) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = min;
}
console.log(arr)