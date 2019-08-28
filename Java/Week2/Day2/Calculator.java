import java.util.ArrayList;
import java.util.Scanner;

public class Calculator {
  public static void main(String... args) {
    // Create a simple calculator application which reads the parameters from the
    // prompt
    // and prints the result to the prompt.
    // It should support the following operations,
    // create a method named "calculate()":
    // +, -, *, /, % and it should support two operands.
    // The format of the expressions must be: {operation} {operand} {operand}.
    // Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

    // You can use the Scanner class
    // It should work like this:

    // Start the program
    // It prints: "Please type in the expression:"
    // Waits for the user input
    // Print the result to the prompt
    // Exit
    System.out.println("Please add the operation, and the two operand. Example: + 3 3");
    Scanner scan = new Scanner(System.in);
    String[] input = new String[3];
    input = scan.nextLine().split("");
    System.out.println(Calculator(input));
  }

  public static String Calculator(String[] input) {
    Integer sum = 0;
    if (input[0].toCharArray()[0] == '+') {
      sum = Integer.parseInt(input[1]) + Integer.parseInt(input[2]);
    } else if (input[0].toCharArray()[0] == '-') {
      sum = Integer.parseInt(input[1]) - Integer.parseInt(input[2]);
    } else if (input[0].toCharArray()[0] == '*') {
      sum = Integer.parseInt(input[1]) * Integer.parseInt(input[2]);
    } else if (input[0].toCharArray()[0] == '/') {
      sum = Integer.parseInt(input[1]) / Integer.parseInt(input[2]);
    } else if (input[0].toCharArray()[0] == '%') {
      sum = Integer.parseInt(input[1]) % Integer.parseInt(input[2]);
    }
    return sum.toString();
  }
}