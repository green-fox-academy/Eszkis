// - Create an array variable named `abc`
//   with the following content: `["first", "second", "third"]`
// - Swap the first and the third element of `abc`

/**
 * SwapElements
 */
public class SwapElements {

  public static void main(String[] args) {
    String[] abc = { "first", "second", "third" };
    String change = abc[0];
    abc[0] = abc[2];
    abc[2] = change;
    for (String element : abc) {
      System.out.println(element);
    }
  }
}