//Create a function named is anagram following your current language's style guide.
// It should take two strings and return a boolean value depending on whether its an anagram or not.

/**
 * Anagram
 */
public class Anagram {

  public static void main(String[] args) {
    System.out.println(anagram("god", "dog"));
    System.out.println(anagram("fox", "green"));
  }

  public static Boolean anagram(String firstW, String secondW) {
    Boolean question = false;
    String[] letters = firstW.split("");
    String reverse = "";
    for (int letter = letters.length - 1; letter >= 0; letter--) {
      reverse += letters[letter];
    }
    if (reverse.equals(secondW)) {
      question = true;
    }
    return question;
  }
}