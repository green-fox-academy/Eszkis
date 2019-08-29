import java.util.Scanner;

/*
 * What is Armstrong number? An Armstrong number is an n-digit number that is
 * equal to the sum of the nth powers of its digits.
 * 
 * Let's demonstrate this for a 4-digit number: 1634 is a 4-digit number, raise
 * each digit to the fourth power, and add: 1^4 + 6^4 + 3^4 + 4^4 = 1634, so it
 * is an Armstrong number. For a 3-digit number: 153 is a 3-digit number, raise
 * each digit to the third power, and add: 1^3 + 5^3 + 3^3 = 153, so it is an
 * Armstrong number. Exercise Write a simple program to check if a given number
 * is an armstrong number. The program should ask for a number. E.g. if we type
 * 371, the program should print out: The 371 is an Armstrong number.
 */

/**
 * armstrong
 */
public class armstrong {

  public static void main(String[] args) {
    System.out.println("Please give a number to check if it is Armstrong number.");
    Scanner scan = new Scanner(System.in);
    String[] input = scan.nextLine().split("");
    System.out.println(isArmstrong(input));
  }

  public static String isArmstrong(String[] numbersInput) {
    int sum = 0;
    String original = "";
    for (String element : numbersInput) {
      original += element;
      sum += Math.pow(Integer.valueOf(element), numbersInput.length);
    }
    if (sum == Integer.valueOf(original)) {
      return "The " + original + " is an Armsrtong number.";
    } else {

      return "The " + original + " is not an Armsrtong number.";
    }
  }
}