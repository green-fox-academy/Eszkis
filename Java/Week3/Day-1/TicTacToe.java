import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class TicTacToe {

  public static void main(String[] args) {
    // Write a function that takes a filename as a parameter
    // The file contains an ended Tic-Tac-Toe match
    // We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
    // Return "X", "O" or "Draw" based on the input file
    Path filePath1 = Paths.get("win-o.txt");
    Path filePath2 = Paths.get("win-x.txt");
    Path filePath3 = Paths.get("draw.txt");

    System.out.println(ticTacResult(filePath1));
    // Should print "O"

    System.out.println(ticTacResult(filePath2));
    // Should print "X"

    System.out.println(ticTacResult(filePath3));
    // Should print "Draw"
  }

  public static String ticTacResult(Path filePath) {
    String answer = "draw";
    String[] content = new String[3];
    try {
      content = Files.readAllLines(filePath).toString().split(",");
    } catch (IOException e) {
      System.out.println("Can't read file!");
    }
    for (int i = 0; i < content.length; i++) {
      content[i] = content[i].replace("[", "");
      content[i] = content[i].replace("]", "");
      content[i] = content[i].replace(" ", "");
    }
    if (content[0].split("")[0].equals(content[1].split("")[1])
        && content[2].split("")[2].equals(content[0].split("")[0])) {
      answer = content[0].split("")[0];
    } else if (content[0].split("")[2].equals(content[1].split("")[1])
        && content[2].split("")[0].equals(content[0].split("")[0])) {
      answer = content[0].split("")[2];
    }
    for (int i = 0; i < 3; i++) {
      if (content[0].split("")[i].equals(content[1].split("")[i])
          && content[2].split("")[i].equals(content[0].split("")[i])) {
        answer = content[0].split("")[i];
      } else if (content[i].split("")[0].equals(content[i].split("")[1])
          && content[i].split("")[0].equals(content[i].split("")[2])) {
        answer = content[i].split("")[2];
      }
    }
    return answer;
  }
}