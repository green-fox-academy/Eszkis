// - Create an array variable named `r`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

public class SumElements {

  public static void main(String[] args) {
    int[] r = { 54, 23, 66, 12 };
    int sum = 0;
    for (int i = 0; i < r.length; i++) {
      sum += r[i];
    }
    System.out.println(sum);
  }
}
