import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.awt.List;
import java.io.IOException;
import java.nio.file.Files;

public class WriteSingleLine {
  public static void main(String[] args) {
    // Write a function that is able to manipulate a file
    // By writing your name into it as a single line
    // The file should be named "my-file.txt"
    // In case the program is unable to write the file,
    // It should print the following error message: "Unable to write file:
    // my-file.txt"
    Path filePath = Paths.get("my-file.txt");
    ArrayList<String> content = new ArrayList<>();
    content.add("This is the first line");
    try {
      Files.write(filePath, content);

    } catch (IOException e) {
      System.out.println("Unable to write file: my-file.txt");
    }
  }
}