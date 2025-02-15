enum Operator {
  Add = '+',
  Subtract = '-',
  Multiply = '*',
  Divide = '/'
}

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(operator: Operator, a: number, b: number): number {
  switch (operator) {
    case Operator.Add:
      return add(a, b);
    case Operator.Subtract:
      return subtract(a, b);
    case Operator.Multiply:
      return multiply(a, b);
    case Operator.Divide:
      return divide(a, b);
  }
}

console.log(operate(Operator.Add, 5, 3)); // Output: 8
console.log(operate(Operator.Subtract, 5, 3)); // Output: 2
console.log(operate(Operator.Multiply, 5, 3)); // Output: 15
//console.log(operate(Operator.Divide, 5, 0)); // Throws an error
//console.log(operate('%',5,3)); //Compile time error