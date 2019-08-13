// - Create an array variable named `numbers`
//   with the following content: `[4, 5, 6, 7]`
// - Print all the elements of `numbers`

/**
 * PrintAll
 */
public class PrintAll {

  public static void main(String[] args) {
    int[] number = { 4, 5, 6, 7 };
    for (int element : number) {
      System.out.println(element);
    }
  }
}