import sympy as sp
from sympy import symbols, solve

x = symbols('x')
f = x**2 + 5*x - 10
solutions = solve(f, x)
print(solutions)
