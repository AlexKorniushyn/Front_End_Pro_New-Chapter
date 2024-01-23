const operator = ["+", "-", "/", "*"];
const action = prompt(`enter operator ${operator.join(", ")}`);
const firstOperand = getOperand("first");
const secondOperand = getOperand("second");

if (!isValidOperator(action)) {
  alert("Wrong operator");
} else if (!isNanValid(firstOperand) || !isNanValid(secondOperand)) {
  alert("Wrong operand");
} else {
  const result = calc(action, firstOperand, secondOperand);

  showResult(firstOperand, action, secondOperand, result);
}

function getOperand(operandName) {
  const num = prompt(`enter ${operandName} operand`, "3");
  return num === null ? Number.NaN : Number(num);
}

function isValidOperator(action) {
  return operator.includes(action);
}

function isNanValid(operand) {
  return !isNaN(operand);
}

function calc(action, first, second) {
  let res;
  if (action === "+") {
    res = first + second;
  } else if (action === "-") {
    res = first - second;
  } else if (action === "/") {
    res = first / second;
  } else if (action === "*") {
    res = first * second;
  }
  return res;
}

function showResult(first, action, second, result) {
  return alert(`${first} ${action} ${second} = ${result}`);
}
