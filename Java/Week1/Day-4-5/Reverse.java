// - Create an array variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// - Print the elements of the reversed `aj`

/**
 * Reverse
 */
public class Reverse {

  public static void main(String[] args) {
    int[] aj = { 3, 4, 5, 6, 7 };
    int[] ja = new int[aj.length];
    for (int element = 0; element < aj.length; element++) {
      ja[ja.length - 1 - element] = aj[element];
    }
    aj = ja;
    for (int element : aj) {
      System.out.print(element + " ");
    }
  }
}