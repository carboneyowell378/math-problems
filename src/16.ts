import sympy as sp
from sympy.abc import x, y

# Define symbols
x, y = sp.symbols('x y')

# Solve the system of equations
solution = sp.solve([x**2 + 1, (x - y)**3], (x, y))

# Print the solution
print(solution)
