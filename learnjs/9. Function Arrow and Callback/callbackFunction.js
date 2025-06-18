const calculate = (a, b, operation) => {
    return operation(a, b);
}

 const result = calculate(3, 4, function (num1, num2) {
    return num1 + num2;
})

console.log(result);