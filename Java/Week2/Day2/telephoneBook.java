import java.util.HashMap;

/* We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

Create a map with the following key-value pairs.

Name (key)	Phone number (value)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
Create an application which solves the following problems.

What is John K. Miller's phone number?
Whose phone number is 307-687-2982?
Do we know Chris E. Myers' phone number? */

/**
 * telephoneBook
 */
public class telephoneBook {

  public static void main(String[] args) {
    HashMap<String, String> telephoneB = new HashMap<>();
    telephoneB.put("William A. Lathan", "405-709-1865");
    telephoneB.put("John K. Miller", "402-247-8568");
    telephoneB.put("Hortensia E. Foster", "606-481-6467");
    telephoneB.put("Amanda D. Newland", "319-243-5613");
    telephoneB.put("Brooke P. Askew", "307-687-2982");
    System.out.println(getNumber(telephoneB, "John K. Miller"));
    System.out.println(getName(telephoneB, "307-687-2982"));
    System.out.println(gotNumber(telephoneB, "Chris E. Myers"));

  }

  public static String getNumber(HashMap<String, String> inputMap, String name) {
    return inputMap.get(name);
  }

  public static String getName(HashMap<String, String> inputMap, String number) {
    String name = "";
    for (String key : inputMap.keySet()) {
      if (number == inputMap.get(key)) {
        name = key;
      }
    }
    return name;
  }

  public static String gotNumber(HashMap<String, String> inputMap, String name) {
    String answer = "We don't have the number for " + name + ".";
    if (inputMap.get(name) != null) {
      answer = "We have the number for " + name + ".";
    }
    return answer;
  }

}