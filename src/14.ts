function solveMathProblem(problem: string): number {
  const operators = ["+", "-", "*", "/"];
  let solution = 0;

  for (let i = 0; i < problem.length; i++) {
    if (operators.includes(problem[i])) {
      solution += eval(problem.substring(0, i + 1));
      problem = problem.substring(i + 1);
      i = -1;
    }
  }

  return solution + Number(problem);
}
