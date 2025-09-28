#include <iostream>
using namespace std;

// Function to calculate and print factorial
void printFactorial(int n) {
    long long factorial = 1;
    for (int i = 1; i <= n; ++i) {
        factorial *= i;
    }
    cout << "Factorial of " << n << " is " << factorial << endl;
}

void printFibonacci(int n) {
    if (n <= 0) {
        cout << "Fibonacci series is not defined for non-positive terms." << endl;
        return;
    }

    long long first = 0, second = 1;
    cout << "Fibonacci series up to " << n << " terms: ";

    for (int i = 1; i <= n; ++i) {
        cout << first << " ";
        long long next = first + second;
        first = second;
        second = next;
    }
    cout << endl;
}

int main() {
    int number;
    cout << "Enter a positive integer: ";
    cin >> number;

    if (number < 0) {
        cout << "Factorial and Fibonacci series are not defined for negative numbers." << endl;
    } else {
        printFactorial(number);
        printFibonacci(number);
    }

    return 0;
}