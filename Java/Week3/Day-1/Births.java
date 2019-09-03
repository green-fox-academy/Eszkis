import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;

public class Births {

  public static void main(String[] args) {
    // Create a function that
    // - takes the name of a CSV file as a parameter,
    // - every row is in the following format: <person name>;<birthdate in
    // YYYY-MM-DD format>;<city name>
    // - returns the year when the most births happened.
    // - if there were multiple years with the same number of births then return any
    // one of them

    // You can find such a CSV file in this directory named births.csv
    // If you pass "births.csv" to your function, then the result should be either
    // 2006, or 2016.
    Path filePath1 = Paths.get("births.txt");
    System.out.println(mostBirth(filePath1));

  }

  public static String mostBirth(Path filePath) {
    String answer = "";
    HashMap<Integer, Integer> birthCount = new HashMap<>();
    String[] content = new String[100];
    for (int i = 1960; i < 2018; i++) {
      birthCount.put(i, 0);
    }
    try {
      content = Files.readAllLines(filePath).toString().split(",");
    } catch (IOException e) {
      System.out.println("Can't read file!");
    }
    for (String var : content) {
//      System.out.println((int) Integer.parseInt(var.split(";")[1].substring(0, 4)));
      birthCount.get((int) Integer.parseInt(var.split(";")[1].substring(0, 4)));
    }
    return birthCount.toString();
  }
}