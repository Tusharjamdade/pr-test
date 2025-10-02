use std::io;

// Function to calculate and print factorial
fn print_factorial(n: u64) {
    let mut factorial: u64 = 1;
    for i in 1..=n {
        factorial *= i;
    }
    println!("Factorial of {} is {}", n, factorial);
}

// Function to calculate and print Fibonacci series
fn print_fibonacci(n: u64) {
    if n == 0 {
        println!("Fibonacci series is not defined for non-positive terms.");
        return;
    }

    let mut first: u64 = 0;
    let mut second: u64 = 1;

    print!("Fibonacci series up to {} terms: ", n);
    for _ in 0..n {
        print!("{} ", first);
        let next = first + second;
        first = second;
        second = next;
    }
    println!();
}

fn main() {
    println!("Enter a positive integer: ");

    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    let number: i64 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Please enter a valid integer.");
            return;
        }
    };

    if number < 0 {
        println!("Factorial and Fibonacci series are not defined for negative numbers.");
    } else {
        let n = number as u64;
        print_factorial(n);
        print_fibonacci(n);
    }
}
