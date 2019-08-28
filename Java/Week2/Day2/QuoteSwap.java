import java.util.*;

import javax.lang.model.util.ElementScanner6;

public class QuoteSwap {
  public static void main(String... args) {
    ArrayList<String> list = new ArrayList<String>(
        Arrays.asList("What", "I", "do", "create,", "I", "cannot", "not", "understand."));

    // Accidentally I messed up this quote from Richard Feynman.
    // Two words are out of place
    // Your task is to fix it by swapping the right words with code
    // Create a method called quoteSwap().

    // Also, print the sentence to the output with spaces in between.
    System.out.println(quoteSwap(list));
    // Expected output: "What I cannot create I do not understand."

  }

  public static String quoteSwap(ArrayList<String> input) {
    String answer = "";
    for (String element : input) {
      if (element == "do") {
        answer += " cannot";
      } else if (element == "cannot") {
        answer += " do";

      } else {
        answer += " " + element;
      }
    }
    return answer;
  }

}