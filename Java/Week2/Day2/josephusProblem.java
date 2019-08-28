import java.util.ArrayList;
import java.util.Scanner;

/*
 * Exercise Write a function to solve Josephus Problem. The program should ask
 * for a number, this number represents how many people are in the "game". The
 * return value should be the number of the "winning" seat.
 * 
 * Examples 
 * number of people number of the winning seat 
 * 1 1 
 * 2 1 
 * 3 3
 * 7 7
 * 12 9
 * 41 19
 */

/**
 * josephusProblem
 */
public class josephusProblem {

  public static void main(String[] args) {
    System.out.println("How many people in the game?");
    Scanner scan = new Scanner(System.in);
    int input = 0;
    input = Integer.parseInt(scan.nextLine());

    System.out.println(josephusProblemSolver(input));
  }

  public static String josephusProblemSolver(int playerNumber) {
    ArrayList<Integer> seasts = new ArrayList<>();
    for (int i = 0; i < playerNumber; i++) {
      seasts.add(i + 1);
    }
    int remove = 0;
    while (seasts.size() > 1) {
      System.out.println("**************************");
      System.out.println(remove);
      System.out.println(seasts);
      seasts.remove(remove + 1);
      if (remove+1 >= seasts.size() - 1) {
        remove = 0;
      } else {
        remove++;
      }
    }
    return seasts.toString();
  }
}