import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
  JLabel title;
  Container c;
  public MyFrame() {
    setTitle("Register");
    setBounds(300, 90, 900, 600);
    setVisible(true);

    c = getContentPane();
    c.setLayout(null);

    title = new JLabel("Registration Form");
    title.setFont(new Font("Arial", Font.PLAIN, 30));
    title.setSize(300, 30);
    title.setLocation(300, 30);
    c.add(title);
  }
}
public class Main {
  public static void main(String[] args) throws Exception {
    MyFrame f = new MyFrame();
  }
}