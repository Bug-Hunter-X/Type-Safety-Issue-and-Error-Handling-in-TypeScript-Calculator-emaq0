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

function operate(operator: string, a: number, b: number): number {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error('Invalid operator');
  }
}

console.log(operate('+', 5, 3)); // Output: 8
console.log(operate('-', 5, 3)); // Output: 2
console.log(operate('*', 5, 3)); // Output: 15
console.log(operate('/', 5, 0)); // Throws an error