import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class Checkerboard {
  public static void mainDraw(Graphics graphics) {
    // Fill the canvas with a checkerboard pattern.
    checkboard(2, graphics);
  }

  public static void checkboard(int stepNumber, Graphics g) {
    Color tile = Color.BLACK;
    for (int outer = 0; outer < stepNumber; outer++) {
      for (int inner = 0; inner < stepNumber; inner++) {
        System.out.println("outer" + outer * (320 / stepNumber) + " inner" + inner * (320 / stepNumber));
        System.out.println(tile);
        g.setColor(tile);
        g.fillRect(inner * (320 / stepNumber), outer * (320 / stepNumber), (320 / stepNumber), (320 / stepNumber));
        if (g.getColor() == Color.BLACK) {
          tile = Color.WHITE;
        } else {
          tile = Color.BLACK;
        }
      }
      tile = Color.WHITE;
    }
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