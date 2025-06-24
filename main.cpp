#include <iostream>
using namespace std;

// Function to calculate and print factorial
void printFactorial(int n) {
    long long factorial = 1;
    for(int i = 1; i <= n; ++i) {
        factorial *= i;
    }
    cout << "Factorial of " << n << " is " << factorial << endl;
}

int main() {
    int number;
    cout << "Enter a positive integer: ";
    cin >> number;

    if (number < 0) {
        cout << "Factorial is not defined for negative numbers." << endl;
    } else {
        printFactorial(number);
    }

    return 0;
}
