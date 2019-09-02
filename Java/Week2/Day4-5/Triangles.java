import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class Triangles {
  public static void mainDraw(Graphics graphics) {
    int canvasSize = 320;
    int lineNumber = 4;
    int size = 20;
    int height = (int) ((size / 2) * Math.tan(Math.PI / 3));
    int widhtMod = (canvasSize - lineNumber * size) / 2;
    int heightMod = canvasSize - (canvasSize - lineNumber * height) / 2;
    for (int wHeight = 0; wHeight < lineNumber; wHeight++) {
      for (int lines = 0; lines < lineNumber - wHeight; lines++) {
        graphics.drawLine(widhtMod + size * lines + size * wHeight / 2, heightMod - wHeight * height,
            widhtMod + size + size * lines + size * wHeight / 2, heightMod - wHeight * height);
        graphics.drawLine(widhtMod + size + size * lines + size * wHeight / 2, heightMod - wHeight * height,
            widhtMod + size / 2 + size * lines + size * wHeight / 2, heightMod - height - wHeight * height);
        graphics.drawLine(widhtMod + size / 2 + size * lines + size * wHeight / 2,
            heightMod - height - wHeight * height, widhtMod + size * lines + size * wHeight / 2,
            heightMod - wHeight * height);
      }
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