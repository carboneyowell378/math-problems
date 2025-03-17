function solveMathProblem(problem: string): number {
  let result = 0;
  const operations = ["+", "-", "*", "/"];
  const numbers = problem.split(" ");

  for (let i = 0; i < numbers.length - 1; i++) {
    const operation = operations[Math.floor(Math.random() * operations.length)];
    result += parseInt(numbers[i]) + (operation === "+" ? parseInt(numbers[i + 1]) : -parseInt(numbers[i + 1]));
  }

  return result;
}
