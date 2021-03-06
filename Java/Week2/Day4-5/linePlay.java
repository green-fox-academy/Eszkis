import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class linePlay {
  public static void mainDraw(Graphics graphics) {
    int pixel = 16;
    graphics.setColor(Color.RED);
    for (int i = 0; i < 320; i++) {
      graphics.drawLine(0 + i * pixel, 0, 320, 0 + i * pixel);
    }
    graphics.setColor(Color.BLUE);
    for (int i = 0; i < 320; i++) {
      graphics.drawLine(0 + i * pixel, 320, 0, 0 + i * pixel);
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