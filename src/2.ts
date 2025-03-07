`const getRandomMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  let operation;
  if (Math.random() < 0.5) {
    operation = '+';
  } else {
    operation = '-';
  }
  return `${num1} ${operation} ${num2}`;
};`