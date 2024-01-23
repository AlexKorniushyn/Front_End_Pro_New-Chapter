const operator = prompt("enter operator +,-,/,*");
const firstOperand = getOperand("first");
const secondOperand = getOperand("second");

const result = calculate(operator, firstOperand, secondOperand);
showResult(firstOperand, operator, secondOperand, result);

function getOperand(operand) {
  return Number(prompt(`enter ${operand} operand`, "3"));
}

function calculate(operator, first, second) {
  let result;
  if (operator === "+") {
    result = first + second;
  } else if (operator === "-") {
    result = first - second;
  } else if (operator === "/") {
    result = first / second;
  } else if (operator === "*") {
    result = first * second;
  } else {
    alert("Миша все хуйня, давай по новой!");
  }
  return result;
}

function showResult(first, operator, second, result) {
  return alert(`${first} ${operator} ${second} = ${result}`);
}
