import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class Doubled {

  public static void main(String[] args) {
    // Create a method that decrypts the duplicated-chars.txt
    Path filePath = Paths.get("duplicated-chars.txt");
    decrypts(filePath);
  }

  public static void decrypts(Path filePath) {
    String decrypted = "";
    try {
      String[] content = Files.readAllLines(filePath).toString().split("");
      for (int i = 0; i < content.length - 1; i++) {
        if (content[i].equals(content[i + 1])) {
        } else {
          decrypted += content[i];
        }
      }
    } catch (IOException e) {
      System.out.println("Can't find file.");
    } catch (Exception e) {
      System.out.println("Error");
    }
    decrypted = decrypted.replace(",", "\n");
    decrypted = decrypted.replace("[", "");
    System.out.println(decrypted);
  }
}