import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import java.nio.file.Files;

public class CopyFile {
  public static void main(String[] args) {

    // Write a function that copies the contents of a file into another
    // It should take the filenames as parameters
    // It should return a boolean that shows if the copy was successful
    Path filePath1 = Paths.get("my-file.txt");
    Path filePath2 = Paths.get("my-file2.txt");
    copyFile(filePath1, filePath2);
  }

  public static void copyFile(Path filePath, Path filePath2) {
    try {
      List<String> content = Files.readAllLines(filePath);
      Files.write(filePath2, content);

    } catch (IOException e) {
      System.out.println("Unable to write file: my-file.txt");
    }
  }
}