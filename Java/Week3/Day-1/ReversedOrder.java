
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class ReversedOrder {

  public static void main(String[] args) {
    // Create a method that decrypts reversed-lines.txt
    Path filePath = Paths.get("reversed-order.txt");
    reversed(filePath);
  }

  public static void reversed(Path filePath) {
    String decrypted = "";
    try {
      String[] content = Files.readAllLines(filePath).toString().split(",");
      for (int i = content.length - 1; i > -1; i--) {
        decrypted += content[i] + "\n";
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