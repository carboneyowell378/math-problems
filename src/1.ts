`const generateMathProblem = () => {
  const operators = ['+', '-', '*', '/'];
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorIndex];
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  return {
    problem: `${num1} ${operator} ${num2}`,
    answer: result
  };
};`