function argument(number) {
    if (number % 2 == 0) {
        console.log(number, true);
    } else {
        console.log(number, false);

    }
}


function isEven(callback) {
    let number = 9;
    callback(9);
    console.log(callback);
}

isEven(argument);