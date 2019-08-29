import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class FunctionToCenter {
  public static void mainDraw(Graphics graphics) {
    // Fill the canvas with lines from the edges, every 20 px, to the center.
    graphics.setColor(new Color(120, 120, 120));
    for (int i = 0; i < 320; i += 16) {
      graphics.drawLine(i, 0, 160, 160);
    }
    for (int i = 0; i < 320; i += 16) {
      graphics.drawLine(0, i, 160, 160);
    }
    for (int i = 0; i < 320; i += 16) {
      graphics.drawLine(i, 320, 160, 160);
    }
    for (int i = 0; i < 320; i += 16) {
      graphics.drawLine(320, i, 160, 160);
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