// - Create an integer variable named `baseNum` and assign the value `123` to it
// - Create a function called `doubling` that doubles it's input parameter and returns with an integer
// - Print the result of `doubling(baseNum)`

/**
 * Doubling
 */
public class Doubling {

  public static void main(String[] args) {
    int baseNum = 123;
    doublingFunction(baseNum);
  }

  public static void doublingFunction(int inputNum) {
    System.out.println(inputNum*=2);
  }
}