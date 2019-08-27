import java.util.HashMap;

/* Shopping list 2
Represent the following products with their prices

Product	Amount
Milk	1.07
Rice	1.59
Eggs	3.14
Cheese	12.60
Chicken Breasts	9.40
Apples	2.31
Tomato	2.58
Potato	1.75
Onion	1.10
Represent Bob's shopping list

Product	Amount
Milk	3
Rice	2
Eggs	2
Cheese	1
Chicken Breasts	4
Apples	1
Tomato	2
Potato	1
Represent Alice's shopping list

Product	Amount
Rice	1
Eggs	5
Chicken Breasts	2
Apples	1
Tomato	10
Create an application which solves the following problems.

How much does Bob pay?
How much does Alice pay?
Who buys more Rice?
Who buys more Potato?
Who buys more different products?
Who buys more products? (piece) */

public class shoppingList2 {
  public static void main(String[] args) {
    HashMap<String, Double> shopList = new HashMap<>();
    shopList.put("Milk", 1.07);
    shopList.put("Rice", 1.59);
    shopList.put("Eggs", 3.14);
    shopList.put("Cheese", 12.60);
    shopList.put("Chicken Breasts", 9.40);
    shopList.put("Apples", 2.31);
    shopList.put("Tomato", 2.58);
    shopList.put("Potato", 1.75);
    shopList.put("Onion", 1.10);
    HashMap<String, Integer> bobList = new HashMap<>();
    bobList.put("Milk", 3);
    bobList.put("Rice", 2);
    bobList.put("Eggs", 2);
    bobList.put("Cheese", 1);
    bobList.put("Chicken Breasts", 4);
    bobList.put("Apples", 1);
    bobList.put("Tomato", 2);
    bobList.put("Potato", 1);
    HashMap<String, Integer> aliceList = new HashMap<>();
    aliceList.put("Rice", 1);
    aliceList.put("Eggs", 5);
    aliceList.put("Chicken Breasts", 2);
    aliceList.put("Apples", 1);
    aliceList.put("Tomato", 10);

    System.out.println(howMuchToPay(shopList, bobList, "Bob"));
    System.out.println(howMuchToPay(shopList, aliceList, "Alice"));
    System.out.println(whoBuysMore(bobList, "Bob", aliceList, "Alice", "Rice"));
    System.out.println(whoBuysMore(bobList, "Bob", aliceList, "Alice", "Potato"));
    System.out.println(moreDiff(bobList, "Bob", aliceList, "Alice"));
    System.out.println(morePiece(bobList, "Bob", aliceList, "Alice"));
  }

  public static String howMuchToPay(HashMap<String, Double> shopList, HashMap<String, Integer> whoPays, String name) {
    Double totalCost = 0.0;
    for (String element : whoPays.keySet()) {
      totalCost += whoPays.get(element) * shopList.get(element);
    }
    return name + "'s total cost is: " + totalCost;
  }

  public static String whoBuysMore(HashMap<String, Integer> buyer1List, String name1,
      HashMap<String, Integer> buyer2List, String name2, String item) {
    if (buyer2List.get(item) == null || buyer1List.get(item) > buyer2List.get(item)) {
      return name1 + " buys more " + item + ".";
    } else if (buyer1List.get(item) == null || buyer1List.get(item) < buyer2List.get(item)) {
      return name2 + " buys more " + item + ".";
    }
    return name1 + " and " + name2 + " buys the same ammount of " + item + ".";
  }

  public static String moreDiff(HashMap<String, Integer> buyer1List, String name1, HashMap<String, Integer> buyer2List,
      String name2) {
    if (buyer1List.keySet().size() > buyer2List.keySet().size()) {
      return name1 + " buys more different item.";
    } else if (buyer1List.keySet().size() < buyer2List.keySet().size()) {
      return name2 + " buys more different item.";
    }
    return name1 + " and " + name2 + " buys the same ammount of different item.";
  }

  public static String morePiece(HashMap<String, Integer> buyer1List, String name1, HashMap<String, Integer> buyer2List,
      String name2) {
    if (pieceCount(buyer1List) > pieceCount(buyer2List)) {
      return name1 + " buys more item.";
    } else if (pieceCount(buyer1List) < pieceCount(buyer2List)) {
      return name2 + " buys more item.";
    }
    return name1 + " and " + name2 + " buys the same ammount item.";
  }

  public static Integer pieceCount(HashMap<String, Integer> buyerList) {
    Integer count = 0;
    for (String element : buyerList.keySet()) {
      count += buyerList.get(element);
    }
    return count;
  }
}