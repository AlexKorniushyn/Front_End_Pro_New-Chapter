const getOperator = prompt(`Enter operator: '+', '-', '*', '/'`);
const getOperandA = Number(prompt(`Enter operand 'A'`, "3"));
const getOperandB = Number(prompt(`Enter operand 'B'`, "0"));
let calc;

if (getOperator === "+") {
  calc = getOperandA + getOperandB;
} else if (getOperator === "-") {
  calc = getOperandA - getOperandB;
} else if (getOperator === "*") {
  calc = getOperandA * getOperandB;
} else if (getOperator === "/") {
  if (getOperandB !== 0) {
    calc = getOperandA / getOperandB;
  } else {
    calc = `you can't divide by zero`;
    location.reload();
  }
} else {
  calc = "Wrong operation";
  location.reload();
}
alert(`${getOperandA} ${getOperator} ${getOperandB} = ${calc}`);
location.reload();
