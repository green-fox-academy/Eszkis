// Create the usual class wrapper and main method on your own.

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

/**
 * Sum
 */
public class Sum {

  public static void main(String[] args) {
    int max = 10;
    System.out.println(sum(max));
  }

  public static int sum(int maxNum) {
    int sum = 0;
    for (int i = 1; i < (maxNum+1); i++) {
      sum += i;
    }
    return sum;
  }
}