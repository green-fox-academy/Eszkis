import java.util.ArrayList;

/* Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pomelo to List B in a single statement
Print out the 3rd element from List A */

/**
 * ListIntroduction2
 */
public class ListIntroduction2 {

  public static void main(String[] args) {
    ArrayList<String> ListA = new ArrayList<>();
    ListA.add("Apple");
    ListA.add("Avocado");
    ListA.add("Blueberries");
    ListA.add("Durian");
    ListA.add("Lychee");
    ArrayList<String> ListB = ListA;
    System.out.println("ListA contains Durian: " + ListA.contains("Durian"));
    ListB.remove("Durian");
    ListA.add(4, "Kiwifruit");
    if (ListA.size() > ListB.size()) {
      System.out.println("ListA is bigger than ListB");
    } else {
      System.out.println("ListB is bigger than ListA");
    }
    System.out.println("Index of Avocado in ListA: " + ListA.indexOf("Avocado"));
    System.out.println("Index of Durian in ListB: " + ListB.indexOf("Durian"));
    ArrayList<String> extra = new ArrayList<>();
    extra.add("Passion Fruit");
    extra.add("Pomelo");
    ListB.addAll(extra);
    System.out.println(ListB);
    System.out.println(ListA.get(2));
  }
}