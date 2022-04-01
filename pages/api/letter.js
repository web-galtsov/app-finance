import nodemailer from "nodemailer";

export default async function getStaticProps(req, res)  {
    require('dotenv').config()
    const { email } = req.body;
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
            subject: `Contact form submission from letter`,
            html: `<p>Form from letter</p>
                   <p><strong>Email: </strong> ${email}</p>
      `
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });
};
