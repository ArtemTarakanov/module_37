function calculate(a, b, operator){
    if(operator === '*'){return a * b}
    if (operator === '/'){return a / b}
    if (operator === '+'){return a + b}
    if (operator === '-'){return a - b}
}

const contextObj = {};
const argsArray = [2, 3, '+'];

const result = calculate.apply(contextObj, argsArray);

console.log(result);