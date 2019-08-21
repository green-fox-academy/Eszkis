
//Create a function named search palindrome following your current language's style guide.
//It should take a string, search for palindromes that at least 3 characters long and return a list with the found palindromes.

/**
 * PalindromeSearch
 */
public class PalindromeSearch {

  public static void main(String[] args) {
    System.out.println(palindromeSearch("dog goat dad duck doodle never"));
    System.out.println(palindromeSearch("apple"));
    System.out.println(palindromeSearch("racecar"));
    System.out.println(palindromeSearch(""));
  }

  public static String palindromeSearch(String inputWord) {
    String allPalindrome = "[";
    for (int outer = 0; outer < inputWord.length(); outer++) {
      for (int inner = inputWord.length(); inner > outer + 2; inner--) {
        if (isPalindrome(inputWord.substring(outer, inner))) {
          allPalindrome += inputWord.substring(outer, inner) + ", ";
        }
      }
    }
    if (allPalindrome.length() > 1) {
      allPalindrome = allPalindrome.substring(0, allPalindrome.length() - 2);
    }
    allPalindrome += "]";
    return allPalindrome;
  }

  public static Boolean isPalindrome(String Palindrome) {
    Boolean answer = false;
    String[] letters = Palindrome.split("");
    String reverse = "";
    for (int letter = letters.length - 1; letter >= 0; letter--) {
      reverse += letters[letter];
    }
    if (reverse.equals(Palindrome)) {
      answer = true;
    }
    return answer;
  }
}