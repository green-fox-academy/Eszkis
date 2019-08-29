import javax.swing.*;

import java.awt.*;

import static javax.swing.JFrame.EXIT_ON_CLOSE;

public class StarryNight {
  public static void mainDraw(Graphics graphics) {
    // Draw the night sky:
    // - The background should be black
    // - The stars can be small squares
    // - The stars should have random positions on the canvas
    // - The stars should have random color (some shade of grey)
    graphics.setColor(Color.BLACK);
    graphics.fillRect(0, 0, 320, 320);
    setStars(graphics);
    setStars(graphics);
    setStars(graphics);
    setStars(graphics);
    setStars(graphics);

  }

  public static void setStars(Graphics g) {
    Color[] colors = { Color.GRAY, Color.LIGHT_GRAY, Color.DARK_GRAY };
    for (int i = 0; i < colors.length; i++) {
      g.setColor(colors[i]);
      g.fillRect((int) (20 + Math.round(Math.random() * 280)), (int) (20 + Math.round(Math.random() * 280)),
          (int) (20 + Math.round(Math.random() * 20)), (int) (20 + Math.round(Math.random() * 20)));
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