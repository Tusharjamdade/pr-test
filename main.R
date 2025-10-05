# Function to calculate and print factorial
printFactorial <- function(n) {
  factorial <- 1
  for (i in 1:n) {
    factorial <- factorial * i
  }
  cat("Factorial of", n, "is", factorial, "\n")
}

# Function to calculate and print Fibonacci series
printFibonacci <- function(n) {
  if (n <= 0) {
    cat("Fibonacci series is not defined for non-positive terms.\n")
    return()
  }
  
  first <- 0
  second <- 1
  cat("Fibonacci series up to", n, "terms: ")
  
  for (i in 1:n) {
    cat(first, " ")
    next_num <- first + second
    first <- second
    second <- next_num
  }
  cat("\n")
}

# Main program
number <- as.integer(readline(prompt="Enter a positive integer: "))

if (number < 0) {
  cat("Factorial and Fibonacci series are not defined for negative numbers.\n")
} else {
  printFactorial(number)
  printFibonacci(number)
}
