import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/submit-form", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "your-email@gmail.com",
        pass: "your-password",
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "your-email@gmail.com",
      subject: "New Message from Contact Form",
      text: message,
      html: `<p>${message}</p>`,
    });

    console.log(`Message sent: ${info.messageId}`);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending message" });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
