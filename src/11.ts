export const randomNumber = () => {
  // Generate a random number between 1 and 100
  return Math.floor(Math.random() * 100) + 1;
}

export const solveMathProblem = (problem: string) => {
  // Replace all instances of the word "random" with the random number function
  let solution = problem.replace(/random/g, () => randomNumber());
  
  // Evaluate the math expression using eval()
  return eval(solution);
}
