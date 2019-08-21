//Create a function named create palindrome following your current language's style guide. 
//It should take a string, create a palindrome from it and then return it.

/**
 * Palindrome builder
 */
public class Palindrome {

  public static void main(String[] args) {
    System.out.println(palindrom("greenfox"));
    System.out.println(palindrom("123"));
    System.out.println(palindrom(""));
  }

  public static String palindrom(String inputString) {
    String output = inputString;
    String[] raw = new String[inputString.length()];
    raw = inputString.split("");
    for (int length = inputString.length() - 1; length > -1; length--) {
      output += raw[length];
    }
    return output;
  }
}