const readline = require('readline');

// Function to calculate and print factorial
function printFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${n} is ${factorial}`);
}

// Function to calculate and print Fibonacci series
function printFibonacci(n) {
    if (n <= 0) {
        console.log("Fibonacci series is not defined for non-positive terms.");
        return;
    }

    let first = 0, second = 1;
    let series = [];
    for (let i = 1; i <= n; i++) {
        series.push(first);
        let next = first + second;
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

rl.question("Enter a positive integer: ", function(number) {
    number = parseInt(number);

    if (number < 0) {
        console.log("Factorial and Fibonacci series are not defined for negative numbers.");
    } else {
        printFactorial(number);
        printFibonacci(number);
    }

    rl.close();
});
