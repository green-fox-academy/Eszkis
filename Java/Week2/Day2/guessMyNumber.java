import java.util.ArrayList;
import java.util.Scanner;

/*
 * Exercise Write a program where the program chooses a number between 1 and
 * 100. The player is then asked to enter a guess. If the player guesses wrong,
 * then the program gives feedback and ask to enter an other guess until the
 * guess is correct.
 * 
 * Make the range customizable (ask for it before starting the guessing). You
 * can add lives. (optional) Example I've the number between 1-100. You have 5
 * lives.
 * 
 * > 20 Too high. You have 4 lives left.
 * 
 * > 10 Too low. You have 3 lives left.
 * 
 * > 15 Congratulations. You won!
 */

/**
 * guessMyNumber
 */
public class guessMyNumber {

  public static void main(String[] args) {
    System.out.println("Example I've the number between 1-100. You have 5 lives.");
    int numberToFind = (int) Math.round(Math.random() * 100);
    int guessCount = 0;
    Scanner scan = new Scanner(System.in);
    String input = "";
    while (guessCount < 5) {
      input = scan.nextLine();
      if (compare(input, numberToFind, guessCount)[1] == "1") {
        guessCount = 6;
      }
      System.out.println(compare(input, numberToFind, guessCount)[0]);
      guessCount++;
    }
  }

  public static String[] compare(String quess, int number, int life) {
    String[] answer = new String[2];
    answer[0] = "";
    answer[1] = "0";
    if (Integer.parseInt(quess) > number) {
      answer[0] = quess + " Too high. You have " + (4 - life) + " lives left.";
    } else if (Integer.parseInt(quess) < number) {
      answer[0] = quess + " Too Low. You have " + (4 - life) + " lives left.";
    } else {
      answer[0] = quess + " Congratulations. You won!";
      answer[1] = "1";
    }
    return answer;
  }
}