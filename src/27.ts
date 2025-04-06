import sympy

def solve_math_problem():
    """
    Solve a mathematical problem using SymPy.
    
    This function provides a simple example of solving a linear equation:
    2*x + 3 = 7
    
    To use, simply call the function and it will return the solution to the equation.
    """
    # Define symbols
    x = sympy.Symbol('x')
    
    # Solve for 'x'
    solution = sympy.solve(2*x + 3 - 7)
    
    # Print the solution
    print("Solution:", solution)

solve_math_problem()
