const L = [23, 45, 71, 90];

function reverseAndPrintArray(arr) {
    const reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
        console.log(arr[i]);
    }

    return reversedArray;
}

reverseAndPrintArray(L);