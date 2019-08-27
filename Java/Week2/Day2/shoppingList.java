import java.util.ArrayList;

/* We are going to represent a shopping list in a list containing strings.

Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list? */

/**
 * shoppingList
 */
public class shoppingList {

  public static void main(String[] args) {
    ArrayList<String> shopList = new ArrayList<>();
    shopList.add("Eggs");
    shopList.add("Milk");
    shopList.add("Fish");
    shopList.add("Apples");
    shopList.add("Bread");
    shopList.add("Chicken");
    System.out.println(haveOnList(shopList, "Milk"));
    System.out.println(haveOnList(shopList, "Bananas"));
  }

  public static String haveOnList(ArrayList<String> inputList, String item) {
    String answer = item + " is not on the list.";
    if (inputList.contains(item)) {
      answer = item + " is on the list.";
    }
    return answer;
  }
}