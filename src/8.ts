const mathProblem = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  let problem: string;
  
  if (num1 > num2) {
    problem = `${num1} + ${num2}`;
  } else {
    problem = `${num2} - ${num1}`;
  }
  
  return problem;
};
