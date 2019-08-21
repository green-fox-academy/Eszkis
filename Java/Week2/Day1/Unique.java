public class Unique {
  public static void main(String[] args) {
    // Create a function that takes a list of numbers as a parameter
    // Returns a list of numbers where every number in the list occurs only once

    // Example
    System.out.println(unique(new int[] { 1, 11, 34, 11, 52, 61, 1, 34 }));
    // should print: `[1, 11, 34, 52, 61]`
  }

  public static String unique(int[] inputArray) {
    String numbers = "[";
    for (int basic = 0; basic < inputArray.length; basic++) {
      int uniq;
      for (uniq = 0; uniq <= basic; uniq++) {
        if (inputArray[basic] == inputArray[uniq] && basic > uniq) {
          break;
        } else if (inputArray[basic] == inputArray[uniq]) {
          numbers += String.valueOf(inputArray[basic]) + ", ";
        }
      }
    }
    numbers = numbers.substring(0, numbers.length() - 2);
    numbers += "]";
    return numbers;
  }
}