
import random

def get_random_ts_code():
    """Generates a random Time Series (TS) code"""
    return f"{random.randint(10000, 99999)}{random.choice(list('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))}"