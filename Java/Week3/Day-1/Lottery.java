import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;

public class Lottery {

  public static void main(String[] args) {
    // Create a method that find the 5 most common lottery numbers in lottery.csv
    Path filePath1 = Paths.get("lottery.csv");
    System.out.println(decode(filePath1));
  }

  public static String decode(Path pathInput) {
    String decrypted = "";
    String first = "1";
    String second = "2";
    String third = "3";
    String fourth = "4";
    String fifth = "5";
    ArrayList<String> data = new ArrayList<>();
    HashMap<String, Integer> count = new HashMap<>();
    for (int i = 0; i < 91; i++) {
      count.put(String.valueOf(i), 0);
    }
    try {
      String[] content = Files.readAllLines(pathInput).toString().split(" Ft;");
      for (int i = 4; i < content.length; i += 4) {
        data.add(content[i].split(",")[0].split(";")[0]);
        data.add(content[i].split(",")[0].split(";")[1]);
        data.add(content[i].split(",")[0].split(";")[2]);
        data.add(content[i].split(",")[0].split(";")[3]);
        data.add(content[i].split(",")[0].split(";")[4]);
      }
    } catch (IOException e) {
      System.out.println("Can't find file.");
    } catch (Exception e) {
      System.out.println("Error");
    }
    data.remove(data.size() - 1);
    data.add("89");
    for (String element : data) {
      Integer value = count.get(element) + 1;
      count.replace(element, value);
    }
    for (String element : count.keySet()) {
      if (count.get(element) > count.get(first)) {
        fifth = fourth;
        fourth = third;
        third = second;
        second = first;
        first = element;
      } else if (count.get(element) > count.get(second)) {
        fifth = fourth;
        fourth = third;
        third = second;
        second = element;
      } else if (count.get(element) > count.get(third)) {
        fifth = fourth;
        fourth = third;
        third = element;
      } else if (count.get(element) > count.get(fourth)) {
        fifth = fourth;
        fourth = element;
      } else if (count.get(element) > count.get(fifth)) {
        fifth = element;
      }
    }
    decrypted = " 1.: " + first + " 2.: " + second + " 3.: " + third + " 4.: " + fourth + " 5.: " + fifth;
    System.out.println(count);
    return decrypted;
  }
}