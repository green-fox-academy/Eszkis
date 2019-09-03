import java.util.Scanner;

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print "fail" if the parameter is 0
/**
 * DivideByZero
 */
public class DivideByZero {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int number = scanner.nextInt();
    try {
      System.out.println(10 / number);
    } catch (Exception e) {
      System.out.println("10 can not be diveded with 0.");
    }
  }
}