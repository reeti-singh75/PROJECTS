function oddEvenSum(arr) {

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return [oddSum, evenSum];

    function createArray(n) {
        let arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
        return arr;
    }
    console.log(createArray(5));
    console.log(createArray(10));

}

const inputArray = [23, 45, 32, 25, 46, 33, 71, 90];
const result = oddEvenSum(inputArray);
console.log(result[0]);
console.log(result[1]);