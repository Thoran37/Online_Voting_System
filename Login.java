import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

class MyFrame extends JFrame implements ActionListener {
    Container c;
    JLabel label1, label2;
    JTextField user;
    JPasswordField pass;
    JButton btn;
    MyFrame() {
        setTitle("Login Form");
        setSize(400, 300);
        setLocation(100, 100);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        c = getContentPane();
        c.setLayout(null);

        label1 = new JLabel("Roll number");
        label2 = new JLabel("password");
        label1.setBounds(10,50,100,20);
        label2.setBounds(10,100,100,20);

        c.add(label1);
        c.add(label2);

        user = new JTextField("");
        user.setBounds(100, 53, 120, 20);
        pass = new JPasswordField("");
        pass.setBounds(100, 103, 120, 20);
        c.add(user);
        c.add(pass);

        btn = new JButton("Login");
        btn.setBounds(100, 150, 120, 20);
        c.add(btn);

        btn.addActionListener(this);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if ((user.getText()).equals("") || (pass.getText()).equals("")) {
            JOptionPane.showMessageDialog(null,"All fields are required", "Invalid login", JOptionPane.WARNING_MESSAGE);
        }
        else {
            System.out.println("Username : " + user.getText());
            System.out.println("Password : " + pass.getText());
            try {
                Class.forName("oracle.jdbc.driver.OracleDriver");
                Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:ORCLA", "system", "1234");
                System.out.println("connection is successful");
                Statement stmt = con.createStatement();
                Statement stmt1 = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);
                ResultSet rs = stmt1.executeQuery("select username from login where password = '" + pass.getText() + "'");
                String check = "";
                while(rs.next()) {
                    check = rs.getString(1);
                }
                if ((user.getText()).equals(check)) {
                    System.out.println("Login successful");
                }
                else {
                    JOptionPane.showMessageDialog(null,"Login ID and password do not match", "Invalid login", JOptionPane.WARNING_MESSAGE);
                }
                stmt.close();
                con.close();
            } catch (Exception se) {
                System.out.println(se);
            }
        }
    }
}

class Login {
    public static void main(String[] args) {
        new MyFrame();
    }
}