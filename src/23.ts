from typing import List

def find_next_prime(num: int) -> int:
    """
    Find the next prime number greater than 'num'.
    
    Args:
        num (int): The number to check for the next prime.
        
    Returns:
        int: The next prime number greater than 'num'.
    """
    if num <= 1:
        return 2
    next_prime = num
    while True:
        next_prime += 1
        if all(next_prime % i != 0 for i in range(2, next_prime)):
            break
    return next_prime

def sieve_of_eratosthenes(n: int) -> List[int]:
    """
    Generate a list of prime numbers up to 'n'.
    
    Args:
        n (int): The upper limit to generate prime numbers.
        
    Returns:
        List[int]: A list containing all the prime numbers up to 'n'.
    """
    if n < 2:
        return []
    primes = [True] * (n + 1)
    p = 2
    while p * p <= n:
        if primes[p]:
            for i in range(p * p, n + 1, p):
                primes[i] = False
        p += 1
    return [p for p in range(n + 1) if primes[p]]
