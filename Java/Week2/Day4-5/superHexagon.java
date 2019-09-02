import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class superHexagon {
  public static void mainDraw(Graphics graphics) {
    int canvasSize = 320;
    int maxLine = 7;
    int size = 20;
    int height = (int) ((size / 2) * Math.tan(Math.PI / 3));
    int widhtMod = (canvasSize - ((maxLine - 1) / 2) * size * 3) / 2;
    int heightMod = (canvasSize - ((maxLine - 1) / 2) * height * 2) / 2;
    for (int horizontal = 0; horizontal <= (maxLine - 1) / 2; horizontal++) {
      for (int veritcal = 0; veritcal <= (maxLine - 1) / 2 + horizontal; veritcal++) {
        graphics.drawLine(widhtMod - size + (size / 2) * 3 * horizontal,
            heightMod + veritcal * 2 * height - horizontal * height, widhtMod - size / 2 + (size / 2) * 3 * horizontal,
            heightMod + height + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod - size / 2 + (size / 2) * 3 * horizontal,
            heightMod + height + veritcal * 2 * height - horizontal * height,
            widhtMod + size / 2 + (size / 2) * 3 * horizontal,
            heightMod + height + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod + size / 2 + (size / 2) * 3 * horizontal,
            heightMod + height + veritcal * 2 * height - horizontal * height,
            widhtMod + size + (size / 2) * 3 * horizontal, heightMod + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod + size + (size / 2) * 3 * horizontal,
            heightMod + veritcal * 2 * height - horizontal * height, widhtMod + size / 2 + (size / 2) * 3 * horizontal,
            heightMod - height + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod + size / 2 + (size / 2) * 3 * horizontal,
            heightMod - height + veritcal * 2 * height - horizontal * height,
            widhtMod - size / 2 + (size / 2) * 3 * horizontal,
            heightMod - height + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod - size / 2 + (size / 2) * 3 * horizontal,
            heightMod - height + veritcal * 2 * height - horizontal * height,
            widhtMod - size + (size / 2) * 3 * horizontal, heightMod + veritcal * 2 * height - horizontal * height);
      }
    }
    for (int horizontal = ((maxLine + 1) / 2); horizontal < maxLine; horizontal++) {
      for (int veritcal = maxLine - 1; veritcal >= (maxLine + 1) / 2 - (maxLine - horizontal); veritcal--) {
        graphics.drawLine(widhtMod - size + (size / 2) * 3 * horizontal,
            heightMod + veritcal * 2 * height - horizontal * height, widhtMod - size / 2 + (size / 2) * 3 * horizontal,
            heightMod + height + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod - size / 2 + (size / 2) * 3 * horizontal,
            heightMod + height + veritcal * 2 * height - horizontal * height,
            widhtMod + size / 2 + (size / 2) * 3 * horizontal,
            heightMod + height + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod + size / 2 + (size / 2) * 3 * horizontal,
            heightMod + height + veritcal * 2 * height - horizontal * height,
            widhtMod + size + (size / 2) * 3 * horizontal, heightMod + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod + size + (size / 2) * 3 * horizontal,
            heightMod + veritcal * 2 * height - horizontal * height, widhtMod + size / 2 + (size / 2) * 3 * horizontal,
            heightMod - height + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod + size / 2 + (size / 2) * 3 * horizontal,
            heightMod - height + veritcal * 2 * height - horizontal * height,
            widhtMod - size / 2 + (size / 2) * 3 * horizontal,
            heightMod - height + veritcal * 2 * height - horizontal * height);
        graphics.drawLine(widhtMod - size / 2 + (size / 2) * 3 * horizontal,
            heightMod - height + veritcal * 2 * height - horizontal * height,
            widhtMod - size + (size / 2) * 3 * horizontal, heightMod + veritcal * 2 * height - horizontal * height);
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