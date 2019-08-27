import java.util.ArrayList;
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

Create an application which solves the following problems.

Which products cost less than 201? (just the name)
Which products cost more than 150? (name + price) */

/**
 * productDatabase
 */
public class productDatabase2 {

  public static void main(String[] args) {
    HashMap<String, Integer> productList = new HashMap<>();
    productList.put("Eggs", 200);
    productList.put("Milk", 200);
    productList.put("Fish", 400);
    productList.put("Apples", 150);
    productList.put("Bread", 50);
    productList.put("Chicken", 550);
    System.out.println(buyForLess(productList, 201));
    System.out.println(buyForMore(productList, 150));
  }

  public static ArrayList buyForLess(HashMap<String, Integer> inputHashMap, Integer price) {
    ArrayList<String> list = new ArrayList<>();
    for (String element : inputHashMap.keySet()) {
      if (inputHashMap.get(element) < price) {
        list.add(element);
      }
    }
    return list;
  }

  public static HashMap buyForMore(HashMap<String, Integer> inputHashMap, Integer price) {
    HashMap<String, Integer> list = new HashMap<>();
    for (String element : inputHashMap.keySet()) {
      if (inputHashMap.get(element) > price) {
        list.put(element, inputHashMap.get(element));
      }
    }
    return list;
  }
}