import java.util.HashMap;

/* Create a map where the keys are strings and the values are strings with the following initial values

Key	Value
978-1-60309-452-8	A Letter to Jo
978-1-60309-459-7	Lupus
978-1-60309-444-3	Red Panda and Moon Bear
978-1-60309-461-0	The Lab
Print all the key-value pairs in the following format

A Letter to Jo (ISBN: 978-1-60309-452-8)
Lupus (ISBN: 978-1-60309-459-7)
Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
The Lab (ISBN: 978-1-60309-461-0)
Remove the key-value pair with key 978-1-60309-444-3

Remove the key-value pair with value The Lab

Add the following key-value pairs to the map

Key	Value
978-1-60309-450-4	They Called Us Enemy
978-1-60309-453-5	Why Did We Trust Him?
Print whether there is an associated value with key 478-0-61159-424-8 or not

Print the value associated with key 978-1-60309-453-5 */

/**
 * MapIntroduction2
 */
public class MapIntroduction2 {

  public static void main(String[] args) {
    HashMap<String, String> phoneNumber = new HashMap<>();
    phoneNumber.put("978-1-60309-452-8", "A Letter to Jo");
    phoneNumber.put("978-1-60309-459-7", "Lupus");
    phoneNumber.put("978-1-60309-444-3", "Red Panda and Moon Bear");
    phoneNumber.put("978-1-60309-461-0", "The Lab");
    printAll(phoneNumber);
    phoneNumber.remove("978-1-60309-444-3");
    printAll(phoneNumber);
    phoneNumber.remove(getKeyWithValue(phoneNumber, "The Lab"));
    printAll(phoneNumber);
    phoneNumber.put("978-1-60309-450-4", "They Called Us Enemy");
    phoneNumber.put("978-1-60309-453-5", "Why Did We Trust Him?");
    if (phoneNumber.get("478-0-61159-424-8") == null) {
      System.out.println("phonenumber does not have associated value for 478-0-61159-424-8");
    } else {
      System.out.println("associated value for 478-0-61159-424-8 is " + phoneNumber.get("478-0-61159-424-8"));
    }
    System.out.println(phoneNumber.get("978-1-60309-453-5"));
  }

  public static void printAll(HashMap input) {
    for (Object element : input.keySet()) {
      System.out.println(input.get(element) + " (ISBN: " + element + ")");
    }
  }

  public static Object getKeyWithValue(HashMap inputMap, Object value) {
    for (Object element : inputMap.keySet()) {
      if (inputMap.get(element).equals(value)) {
        return element;
      }
    }
    return null;
  }
}