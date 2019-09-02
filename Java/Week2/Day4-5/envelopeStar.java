import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class envelopeStar {
  public static void mainDraw(Graphics graphics) {
    int pixel = 10;
    int quater = 4;
    int stepsize = (int) (320 / Math.sqrt(quater));
    System.out.println(stepsize);
    System.out.println((int) Math.sqrt(quater));

    graphics.setColor(Color.RED);
    for (int i = 0; i <= stepsize / pixel; i++) {
      graphics.drawLine(i * pixel, stepsize, stepsize, stepsize + i * pixel);
      graphics.drawLine(stepsize, i * pixel, stepsize + i * pixel, stepsize);
      graphics.drawLine(stepsize, i * pixel, stepsize - i * pixel, stepsize);
      graphics.drawLine(stepsize, 2 * stepsize - i * pixel, stepsize + i * pixel, stepsize);
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