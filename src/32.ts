import sympy as sp

# Define symbols
x = sp.symbols('x')
f = x**2 - 3*x + 4

# Solve the equation f(x) = 0 for x
solution = sp.solve(f, x)
solution
