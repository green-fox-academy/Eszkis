import java.util.*;

public class ElementFinder {
  public static void main(String... args) {
    ArrayList<Integer> arrayList1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
    ArrayList<Integer> arrayList2 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 7));
    System.out.println(containsSeven1(arrayList1));
    System.out.println(containsSeven1(arrayList2));
    System.out.println(containsSeven2(arrayList1));
    System.out.println(containsSeven2(arrayList2));
    // Write a method that checks if the arrayList contains "7" if it contains
    // return "Hoorray" otherwise return "Noooooo"
    // The output should be: "Noooooo"
    // Do this again with a different solution using different list methods!

  }

  public static String containsSeven1(ArrayList<Integer> inputList) {
    if (inputList.contains(7)) {
      return "Hoorray";
    } else {
      return "Noooooo";
    }
  }

  public static String containsSeven2(ArrayList<Integer> inputList) {
    String answer = "Nooooo";
    for (Integer element : inputList) {
      if (element == 7) {
        answer = "Hoorray";
      }
    }
    return answer;
  }
}