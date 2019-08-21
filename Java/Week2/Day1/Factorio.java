//  Create the usual class wrapper
//  and main method on your own.

// - Create a function called `factorio`
//   that returns it's input's factorial

/**
 * Factorio
 */
public class Factorio {

  public static void main(String[] args) {
    int max = 3;
    System.out.println(factorio(max));
  }

  public static int factorio(int maxNumb) {
    int fact = 1;
    for (int i = 1; i < (maxNumb + 1); i++) {
      fact *= i;
    }
    return fact;

  }
}