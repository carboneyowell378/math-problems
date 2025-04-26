import numpy as np
import sympy

def solve_math_problem():
    # Example: Solve for x in the equation 2x + 3 = 7
    x = sympy.Symbol('x')
    equation = sympy.Eq(2*x + 3, 7)
    solution = sympy.solve(equation, x)
    
    # Print the solution
    print("Solution:", solution)

solve_math_problem()
