import java.lang.reflect.Array;
import java.util.ArrayList;

/* We are going to represent our expenses in a list containing integers.

Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? */

/**
 * personalFinance
 */
public class personalFinance {

  public static void main(String[] args) {
    ArrayList<Integer> money = new ArrayList<>();
    money.add(0, 500);
    money.add(1, 1000);
    money.add(2, 1250);
    money.add(3, 175);
    money.add(4, 800);
    money.add(5, 120);
    System.out.println("Total spend: " + totalSpend(money));
    System.out.println("Max spend: " + maxSpend(money));
    System.out.println("Min spend: " + minSpend(money));
    System.out.println("Avg spend: " + average(money));

  }

  public static Integer totalSpend(ArrayList<Integer> inputA) {
    Integer sum = 0;
    for (int i = 0; i < inputA.size(); i++) {
      sum += inputA.get(i);
    }
    return sum;
  }

  public static Integer maxSpend(ArrayList<Integer> inputA) {
    Integer max = inputA.get(0);
    for (Integer element : inputA) {
      if (max < element) {
        max = element;
      }
    }
    return max;
  }

  public static Integer minSpend(ArrayList<Integer> inputA) {
    Integer min = inputA.get(0);
    for (Integer element : inputA) {
      if (min > element) {
        min = element;
      }
    }
    return min;
  }

  public static Integer average(ArrayList<Integer> inputA) {
    Integer avg = 0;
    for (Integer element : inputA) {
      avg += element;
    }
    avg = avg / inputA.size();
    return avg;
  }

}