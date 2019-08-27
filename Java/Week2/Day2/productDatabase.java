import java.util.HashMap;

/* We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

Create a map with the following key-value pairs.

Product name (key)	Price (value)
Eggs	200
Milk	200
Fish	400
Apples	150
Bread	50
Chicken	550
Create an application which solves the following problems.

How much is the fish?
What is the most expensive product?
What is the average price?
How many products' price is below 300?
Is there anything we can buy for exactly 125?
What is the cheapest product? */

/**
 * productDatabase
 */
public class productDatabase {

  public static void main(String[] args) {
    HashMap<String, Integer> productList = new HashMap<>();
    productList.put("Eggs", 200);
    productList.put("Milk", 200);
    productList.put("Fish", 400);
    productList.put("Apples", 150);
    productList.put("Bread", 50);
    productList.put("Chicken", 550);
    System.out.println(getPrice(productList, "Fish"));
    System.out.println(mostExpensive(productList));
    System.out.println(getAverage(productList));
    System.out.println(belowPrice(productList, 300));
    System.out.println(getoFor(productList, 125));
    System.out.println(cheapest(productList));
  }

  public static String getPrice(HashMap<String, Integer> inputHashMap, String item) {
    String asnwer = item + " is not in the DB.";
    if (inputHashMap.get(item) != null) {
      asnwer = "Price for " + item + " is " + inputHashMap.get(item) + ".";
    }
    return asnwer;
  }

  public static String mostExpensive(HashMap<String, Integer> inputHashMap) {
    String answer = inputHashMap.keySet().toArray()[0].toString();
    for (String element : inputHashMap.keySet()) {
      if (inputHashMap.get(element) > inputHashMap.get(answer)) {
        answer = element;
      }
    }
    answer = "Most expensive item on the list is " + answer + ".";
    return answer;
  }

  public static String cheapest(HashMap<String, Integer> inputHashMap) {
    String answer = inputHashMap.keySet().toArray()[0].toString();
    for (String element : inputHashMap.keySet()) {
      if (inputHashMap.get(element) < inputHashMap.get(answer)) {
        answer = element;
      }
    }
    answer = "Cheapest item on the list is " + answer + ".";
    return answer;
  }

  public static String getAverage(HashMap<String, Integer> inputHashMap) {
    Integer average = 0;
    for (String element : inputHashMap.keySet()) {
      average += inputHashMap.get(element);
    }
    average = average / inputHashMap.size();
    return "Average price for the products is " + average + ".";
  }

  public static String belowPrice(HashMap<String, Integer> inputHashMap, Integer price) {
    Integer count = 0;
    for (String element : inputHashMap.keySet()) {
      if (inputHashMap.get(element) < price) {
        count++;
      }
    }
    return count + " product's price is below " + price + ".";
  }

  public static String getoFor(HashMap<String, Integer> inputHashMap, Integer price) {
    String item = "You can't buy anything for " + price + ".";
    for (String element : inputHashMap.keySet()) {
      if (inputHashMap.get(element) == price) {
        item = "You can buy " + inputHashMap.get(element) + " for " + price + ".";
      }
    }
    return item;
  }
}