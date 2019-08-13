// - Create an array variable named `animals`
//   with the following content: `["koal", "pand", "zebr"]`
// - Add all elements an `"a"` at the end

/**
 * AppendA
 */
public class AppendA {

  public static void main(String[] args) {
    String[] animals = { "koal", "pand", "zebr" };
    for (String animal : animals) {
      animal += "a";
      System.out.println(animal);
    }
  }
}