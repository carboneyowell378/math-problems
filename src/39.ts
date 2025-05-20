import numpy as np
from scipy.optimize import fsolve
import matplotlib.pyplot as plt

def f(x):
    return x**2 - 5*x + 6

x_guess = 3
y_solution = fsolve(f, x_guess)
print("Solution for y:", y_solution)
