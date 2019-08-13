// - Create (dynamically) a two dimensional array
// with the following matrix. Use a loop!
//
// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1
//
// - Print this two dimensional array to the output

/**
 * DiagonalMatrix
 */
public class DiagonalMatrix {

  public static void main(String[] args) {
    int size = 4;
    int[][] matrix = new int[size][size];

    for (int outer = 0; outer < size; outer++) {
      for (int inner = 0; inner < size; inner++) {
        if (outer == inner) {
          matrix[outer][inner] = 1;
        } else {
          matrix[outer][inner] = 0;
        }
      }
    }
    for (int outer = 0; outer < size; outer++) {
      for (int inner = 0; inner < size; inner++) {
        System.out.print(matrix[outer][inner] + " ");
      }
      System.out.println();;
    }
  }
}