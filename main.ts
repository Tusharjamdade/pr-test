import * as readline from 'readline';

// Function to calculate and print factorial
function printFactorial(n: number): void {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${n} is ${factorial}`);
}

// Function to calculate and print Fibonacci series
function printFibonacci(n: number): void {
    if (n <= 0) {
        console.log("Fibonacci series is not defined for non-positive terms.");
        return;
    }

    let first = 0, second = 1;
    const series: number[] = [];
    for (let i = 1; i <= n; i++) {
        series.push(first);
        const next = first + second;
        first = second;
        second = next;
    }

    console.log(`Fibonacci series up to ${n} terms: ${series.join(' ')}`);
}

// Main program using readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a positive integer: ", (input: string) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else if (number < 0) {
        console.log("Factorial and Fibonacci series are not defined for negative numbers.");
    } else {
        printFactorial(number);
        printFibonacci(number);
    }

    rl.close();
});
