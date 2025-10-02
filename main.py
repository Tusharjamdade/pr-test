def print_factorial(n):
    factorial = 1
    for i in range(1, n + 1):
        factorial *= i
    print(f"Factorial of {n} is {factorial}")

def print_fibonacci(n):
    if n <= 0:
        print("Fibonacci series is not defined for non-positive terms.")
        return

    first, second = 0, 1
    print(f"Fibonacci series up to {n} terms:", end=" ")

    for _ in range(n):
        print(first, end=" ")
        next_num = first + second
        first, second = second, next_num
    print()  # new line

def main():
    number = int(input("Enter a positive integer: "))

    if number < 0:
        print("Factorial and Fibonacci series are not defined for negative numbers.")
    else:
        print_factorial(number)
        print_fibonacci(number)

if __name__ == "__main__":
    main()
