
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;

public class Logs {

  public static void main(String[] args) {
    // Read all data from 'log.txt'.
    // Each line represents a log message from a web server
    // Write a function that returns an array with the unique IP adresses.
    // Write a function that returns the GET / POST request ratio.
    Path filePath = Paths.get("log.txt");
    uniq(filePath);
    ratio(filePath);
  }

  public static void uniq(Path filePath) {
    ArrayList<String> uniq = new ArrayList<>();
    try {
      String[] content = Files.readAllLines(filePath).toString().split(",");
      for (String var : content) {
        if (!uniq.contains(var.substring(26, 39))) {
          uniq.add(var.substring(26, 39));
        }
      }
    } catch (IOException e) {
      System.out.println("Can't find file.");
    }
    System.out.println(uniq);
  }

  public static void ratio(Path filePath) {
    Double ratio = 0.0;
    Double sum = 0.0;
    Double post = 0.0;
    try {
      String[] content = Files.readAllLines(filePath).toString().split(",");
      for (String var : content) {
        if (var.length() == 47) {
          post++;
        }
      }
      sum = Double.valueOf(String.valueOf(content.length));
    } catch (IOException e) {
      System.out.println("Can't find file.");
    }
    ratio = (sum - post) / post;
    System.out.println(ratio);
  }
}