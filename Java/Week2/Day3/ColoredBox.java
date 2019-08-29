import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class ColoredBox {
  public static void mainDraw(Graphics graphics) {
    // Draw a box that has different colored lines on each edge.
    graphics.setColor(Color.RED);
    graphics.drawLine(110,110,220,110);
    graphics.setColor(Color.GREEN);
    graphics.drawLine(220, 110, 220, 220);
    graphics.setColor(Color.BLUE);
    graphics.drawLine(220,220,110,220);
    graphics.setColor(Color.YELLOW);
    graphics.drawLine(110, 220, 110, 110);    
  }

  // Don't touch the code below
  static int WIDTH = 330;
  static int HEIGHT = 330;

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