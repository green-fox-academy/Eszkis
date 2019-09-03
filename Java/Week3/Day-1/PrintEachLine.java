import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import java.nio.file.Files;

public class PrintEachLine {
  public static void main(String[] args) {
    // Write a program that opens a file called "my-file.txt", then prints
    // each line from the file.
    // If the program is unable to read the file (for example it does not exist),
    // then it should print the following error message: "Unable to read file:
    // my-file.txt"
    try {
      Path filePath = Paths.get("my-file.txt");
      List<String> data = Files.readAllLines(filePath);
      for (String element : data) {
        System.out.println(element);
      }
    } catch (IOException e) {
      System.out.println("Unable to read file: my-file.txt");
    }
  }
}