import java.util.ArrayList;

/* We are going to play with lists. Feel free to use the built-in methods where possible.

Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda 
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements */

public class ListIntroduction1 {

  public static void main(String[] args) {
    ArrayList<String> names = new ArrayList<>();
    System.out.println("names list size " + names.size());
    names.add("William");
    System.out.println("names list is empty: " + names.isEmpty());
    names.add("John");
    names.add("Amanda");
    System.out.println("names list size: " + names.size());
    System.out.println(names.get(2));
    System.out.println("names all element: ");
    for (int i = 0; i < names.size(); i++) {
      System.out.printf(names.get(i) + "\n");
    }
    System.out.println("Print out list with position:");
    for (int i = 0; i < names.size(); i++) {
      System.out.format("%d. " + names.get(i) + "\n", i + 1);
    }
    names.remove(1);
    System.out.println("Removed 2nd element from list: ");
    for (int i = names.size() - 1; i >= 0; i--) {
      System.out.printf(names.get(i) + " ");
    }
    System.out.println();
    names.removeAll(names);
    System.out.println("removed all element");
    System.out.println(names);
  }
}