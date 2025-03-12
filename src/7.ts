import { Math } from 'mathjs';

export function solveMathProblem(problem: string): number {
  // Use mathjs to evaluate the expression and return the result
  return Math.eval(problem);
}
