// Math Problems
function getRandomMathProblem(): string {
  const numbers = ['1', '2', '3', '4', '5'];
  const operators = ['+', '-', '*', '/'];

  const randomNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const randomNumber2 = numbers[Math.floor(Math.random() * numbers.length)];

  let problemString = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  if (randomOperator === '*') {
    problemString += '=';
  } else {
    problemString += `=${evaluateMathExpression(problemString)}`;
  }

  return problemString;
}

function evaluateMathExpression(expression: string): number {
  const numbers = expression.split(' ');
  const operator = numbers[1];
  const operand1 = parseInt(numbers[0]);
  const operand2 = parseInt(numbers[2]);

  if (operator === '+') {
    return operand1 + operand2;
  } else if (operator === '-') {
    return operand1 - operand2;
  } else if (operator === '*') {
    return operand1 * operand2;
  } else if (operator === '/') {
    return operand1 / operand2;
  }
}
