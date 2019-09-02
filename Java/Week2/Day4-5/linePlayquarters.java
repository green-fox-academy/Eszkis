import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class linePlayquarters {
  public static void mainDraw(Graphics graphics) {
    int pixel = 10;
    int quater = 9;
    int stepsize = (int) (320 / Math.sqrt(quater));
    System.out.println(stepsize);
    System.out.println((int) Math.sqrt(quater));

    for (int horizontal = 0; horizontal < (int) Math.sqrt(quater); horizontal++) {
      for (int vertical = 0; vertical < (int) Math.sqrt(quater); vertical++) {
        graphics.setColor(Color.RED);
        for (int i = 0; i <= stepsize / pixel; i++) {
          graphics.drawLine(horizontal * stepsize + i * pixel, vertical * stepsize, (horizontal + 1) * stepsize,
              (vertical) * stepsize + i * pixel);
        }
        graphics.setColor(Color.BLUE);
        for (int i = 0; i <= stepsize / pixel; i++) {
          graphics.drawLine(horizontal * stepsize, (vertical) * stepsize + i * pixel, horizontal * stepsize + i * pixel,
              (vertical + 1) * stepsize);
        }
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