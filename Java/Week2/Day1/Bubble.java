public class Bubble {
  public static void main(String[] args) {
    // Create a function that takes a list of numbers as parameter
    // Returns a list where the elements are sorted in ascending numerical order
    // Make a second boolean parameter, if it's `true` sort that list descending

    // Example:
    System.out.println(bubble(new int[] { 34, 12, 24, 9, 5 }));
    // should print [5, 9, 12, 24, 34]
     System.out.println(advancedBubble(new int[] { 34, 12, 24, 9, 5 }, true));
    // should print [34, 24, 12, 9, 5]
  }

  public static String bubble(int[] input) {
    String order = "[";
    int temp = 0;
    for (int i = 0; i < input.length; i++) {
      for (int j = 1; j < input.length - i; j++) {
        if (input[j - 1] > input[j]) {
          temp = input[j - 1];
          input[j - 1] = input[j];
          input[j] = temp;
        }
      }
    }
    for (int number : input) {
      order += String.valueOf(number) + ", ";
    }
    order = order.substring(0, order.length() - 2);
    order += "]";
    return order;
  }

  public static String advancedBubble(int[] input, Boolean sortOrder) {
    String order = "[";
    int temp = 0;
    for (int i = 0; i < input.length; i++) {
      for (int j = 1; j < input.length - i; j++) {
        if (input[j - 1] < input[j]) {
          temp = input[j - 1];
          input[j - 1] = input[j];
          input[j] = temp;
        }
      }
    }
    for (int number : input) {
      order += String.valueOf(number) + ", ";
    }
    order = order.substring(0, order.length() - 2);
    order += "]";
    return order;
  }
}