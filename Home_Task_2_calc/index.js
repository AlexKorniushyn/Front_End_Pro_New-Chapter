const operator = prompt("enter operator +,-,/,*");
const firstOperand = Number(prompt("enter first operand", "3"));
const secondtOperand = Number(prompt("enter second operand", "3"));
let result;

if (operator === "+") {
  result = firstOperand + secondtOperand;
} else if (operator === "-") {
  result = firstOperand - secondtOperand;
} else if (operator === "/") {
  result = firstOperand / secondtOperand;
} else if (operator === "*") {
  result = firstOperand * secondtOperand;
} else {
  alert("Миша все хуйня, давай по новой!");
}
alert(`${firstOperand} ${operator} ${secondtOperand} = ${result}`);
