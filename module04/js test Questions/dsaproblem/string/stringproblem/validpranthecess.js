function parantheses(str) {
    let arr = [];
    let result = "yes";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
            arr.push(str[i]);
        } else {
            if ((arr[arr.length - 1] === "{" && str[i] === "}") || (arr[arr.length - 1] === "[" && str[i] === "]") || (arr[arr.length - 1] === "(" && str[i] === ")")) {
                arr.pop();
            }
        }
    }
    if (arr.length === 0) {
        return result;
    } else {
        result = "No";
        return result;
    }
}



console.log(parantheses("{{[]}"));

// console.log(parantheses("{[]})"));