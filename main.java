import java.util.Scanner;

public class Main {

    // Function to calculate and print factorial
    static void printFactorial(int n) {
        long factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + n + " is " + factorial);
    }

    // Function to calculate and print Fibonacci series
    static void printFibonacci(int n) {
        if (n <= 0) {
            System.out.println("Fibonacci series is not defined for non-positive terms.");
            return;
        }

        long first = 0, second = 1;
        System.out.print("Fibonacci series up to " + n + " terms: ");

        //loop used 
        for (int i = 1; i <= n; i++) {
            System.out.print(first + " ");
            long next = first + second;
            first = second;
            second = next;
        }
        System.out.println();
    }

    // main function
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a positive integer: ");
        int number = sc.nextInt();

        //condition checked 
        if (number < 0) {
            System.out.println("Factorial and Fibonacci series are not defined for negative numbers.");
        } else {
            printFactorial(number);
            printFibonacci(number);
        }

        sc.close();
    }
}
