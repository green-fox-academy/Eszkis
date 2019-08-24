import java.util.HashMap;

/* We are going to play with maps. Feel free to use the built-in methods where possible.

Create an empty map where the keys are integers and the values are characters

Print out whether the map is empty or not

Add the following key-value pairs to the map

Key	Value
97	a
98	b
99	c
65	A
66	B
67	C
Print all the keys

Print all the values

Add value D with the key 68

Print how many key-value pairs are in the map

Print the value that is associated with key 99

Remove the key-value pair where with key 97

Print whether there is an associated value with key 100 or not

Remove all the key-value pairs */

/**
 * MapIntroduction1
 */
public class MapIntroduction1 {

  public static void main(String[] args) {
    HashMap<Integer, String> hashMapTest = new HashMap<>();
    System.out.println("Is hashMapTest empty: " + hashMapTest.isEmpty());
    hashMapTest.put(97, "a");
    hashMapTest.put(98, "b");
    hashMapTest.put(99, "c");
    hashMapTest.put(65, "A");
    hashMapTest.put(66, "B");
    hashMapTest.put(67, "C");
    System.out.println("Print out all keys");
    System.out.println(hashMapTest.keySet());
    System.out.println("Print out all values");
    for (Integer i : hashMapTest.keySet()) {
      System.out.println(hashMapTest.get(i));
    }
    hashMapTest.put(68, "D");
    System.out.println("Number of key value pair: " + hashMapTest.keySet().size());
    System.out.println("Valou of key 99 is " + hashMapTest.get(99));
    hashMapTest.remove(97);
    System.out.println("is there key value pair for 100: " + hashMapTest.containsKey(100));
    System.out.println(hashMapTest);
    hashMapTest.clear();
    System.out.println("hashMapTest size is " + hashMapTest.size());

  }
}