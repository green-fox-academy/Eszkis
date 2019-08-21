public class SubInt {
  public static void main(String[] args) {
    // Create a function that takes a number and an array of integers as a parameter
    // Returns the indices of the integers in the array of which the first number is
    // a part of
    // Or returns an empty array if the number is not part of any of the integers in
    // the array

    // Example:
    System.out.println(subInt(1, new int[] { 1, 11, 34, 52, 61 }));
    // should print: `[0, 1, 4]`
    System.out.println(subInt(9, new int[] { 1, 11, 34, 52, 61 }));
    // should print: '[]'
  }

  public static String subInt(int numb, int[] array) {
    String pos = "[";
    for (int i = 0; i < array.length; i++) {
      if (array[i] / 10 == numb || array[i] % 10 == numb) {
        pos += String.valueOf(i) + ", ";
      }
    }
    if (pos.length() > 1) {
      pos = pos.substring(0, pos.length() - 2);
    }
    pos += "]";
    return pos;
  }
}