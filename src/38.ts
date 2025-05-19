import numpy as np
from sympy import symbols, solve

x = symbols('x')
eq1 = x**3 - 2*x + 1
solution = solve(eq1, x)
solution[0]
