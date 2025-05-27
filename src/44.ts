import sympy as sp

def solve_math_problem(expression):
    solution = sp.solve(expression, symbols="x")
    if not solution:
        return "No solution found."
    else:
        print(solution)
