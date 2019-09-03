
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class ReversedLines {

  public static void main(String[] args) {
    // Create a method that decrypts reversed-lines.txt
    Path filePath = Paths.get("reversed-lines.txt");
    reversed(filePath);
  }

  public static void reversed(Path filePath) {
    String decrypted = "";
    try {
      String[] content = Files.readAllLines(filePath).toString().split(",");
      for (String element : content) {
        for (int i = element.length() - 1; i > -1; i--) {
          decrypted += element.split("")[i];
        }
        decrypted += "\n";
      }
    } catch (IOException e) {
      System.out.println("Can't find file.");
    } catch (Exception e) {
      System.out.println(e);
    }
    decrypted = decrypted.replace("[", "");
    decrypted = decrypted.replace("]", "");
    System.out.println(decrypted);
  }
}