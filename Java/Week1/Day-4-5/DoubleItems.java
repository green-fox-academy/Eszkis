// - Create an array variable named `numList`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Double all the values in the array

/**
 * DoubleItems
 */
public class DoubleItems {

  public static void main(String[] args) {
    int[] numlist = { 3, 4, 5, 6, 7 };
    for (int element : numlist) {
      element *= 2;
      System.out.println(element);
    }
  }
}