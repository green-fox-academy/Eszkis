import javax.swing.*;

import java.awt.*;
import java.util.Random;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class RainbowBoxFunction {
  public static void mainDraw(Graphics graphics) {
    // Create a square drawing function that takes 3 parameters:
    // The square size, the fill color, graphics
    // and draws a square of that size and color to the center of the canvas.
    // Create a loop that fills the canvas with rainbow colored squares (red,
    // orange, yellow, green, blue, indigo, violet).
    Color[] colors = { Color.RED, Color.orange, Color.yellow, Color.green, Color.blue };
    for (int i = 0; i < colors.length; i++) {
      centeredBox(300 - i * 10, colors[i], graphics);
    }
  }

  public static void centeredBox(int size, Color color, Graphics g) {
    Random rand = new Random();
    g.setColor(color);
    g.fillRect((320 - size) / 2, (320 - size) / 2, size, size);
  }

  // Don't touch the code below
  static int WIDTH = 320;
  static int HEIGHT = 320;

  public static void main(String[] args) {
    JFrame jFrame = new JFrame("Drawing");
    jFrame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    ImagePanel panel = new ImagePanel();
    panel.setPreferredSize(new Dimension(WIDTH, HEIGHT));
    jFrame.add(panel);
    jFrame.setLocationRelativeTo(null);
    jFrame.setVisible(true);
    jFrame.pack();
  }

  static class ImagePanel extends JPanel {
    @Override
    protected void paintComponent(Graphics graphics) {
      super.paintComponent(graphics);
      mainDraw(graphics);
    }
  }
}