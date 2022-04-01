import nodemailer from "nodemailer";

export default async function getStaticProps(req, res) {
    require('dotenv').config();
    const { name, phone, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_USER,
            pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
        }
    });

     try {
        await transporter.sendMail({
            from: email,
            to: ["soso1finance@gmail.com, sosooffice2@gmail.com"],
            subject: `Contact form submission from ${name}`,
            html: `<p>יש לך הגשת טופס יצירת קשר</p>
                   <p><strong>FistName: </strong> ${name}</p><br>
                   <p><strong>Message: </strong> ${message}</p><br>
                   <p><strong>Phone:</strong>${phone}</p>
                   <p><strong>Email: </strong> ${email}</p><br>
      `
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });
};
