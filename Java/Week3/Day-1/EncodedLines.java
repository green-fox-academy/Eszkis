import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;

public class EncodedLines {

  public static void main(String[] args) {
    // Create a method that decrypts encoded-lines.txt
    Path filePath1 = Paths.get("encoded-lines.txt");
    System.out.println(decode(filePath1));
  }

  public static String decode(Path pathInput) {
    String decrypted = "";
    try {
      char[] content = Files.readAllLines(pathInput).toString().toCharArray();
      for (int i = 0; i < content.length - 1; i++) {
        if ((int) content[i] == 32) {
          decrypted += " ";
        } else {
          decrypted += (char) ((int) (content[i] - 1));
        }
      }
    } catch (IOException e) {
      System.out.println("Can't find file.");
    } catch (Exception e) {
      System.out.println("Error");
    }
    decrypted = decrypted.substring(1);
    decrypted = decrypted.replace("+", "\n");
    return decrypted;
  }
}