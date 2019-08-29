import java.util.*;

public class Matchmaking {
  public static void main(String... args) {
    ArrayList<String> girls = new ArrayList<String>(Arrays.asList("Eve", "Ashley", "Claire", "Kat", "Jane"));
    ArrayList<String> boys = new ArrayList<String>(Arrays.asList("Joe", "Fred", "Tom", "Todd", "Neef", "Jeff"));

    // Write a method that joins the two lists by matching one girl with one boy
    // into a new list
    // If someone has no pair, he/she should be the element of the list too
    // Exepected output: "Eve", "Joe", "Ashley", "Fred"...

    System.out.println(makingMatches(girls, boys));
  }

  public static ArrayList makingMatches(ArrayList<String> Girls, ArrayList<String> Boys) {
    ArrayList<String> paired = new ArrayList<>();
    if (Girls.size() > Boys.size()) {
      for (int i = 0; i < Boys.size(); i++) {
        paired.add(Girls.get(i));
        paired.add(Boys.get(i));
      }
      paired.add(Girls.get(Boys.size() - 1));
      paired.add("No boys");
    } else if (Girls.size() < Boys.size()) {
      for (int i = 0; i < Girls.size(); i++) {
        paired.add(Girls.get(i));
        paired.add(Boys.get(i));
      }
      paired.add("No girl");
      paired.add(Boys.get(Girls.size() - 1));
    } else {
      for (int i = 0; i < Girls.size(); i++) {
        paired.add(Girls.get(i));
        paired.add(Boys.get(i));data1
      }
    }
    return paired;
  }
}