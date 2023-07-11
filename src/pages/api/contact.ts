import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, phoneCod, phoneNumber, country } = req.body;
    const mailOptions = {
      from: "codelutions@gmail.com",
      to: ["Melinablanco88@gmail.com", "pierca18@gmail.com"],
      // to: ["pierca18@gmail.com"],
      subject: "New contact @ Hey! Roomie",
      html: `<p>Hola, alguien solicitó entrar a la waitlist:
			<br/>
			Nombre: <br/>
			${name} <br/>
			Email: <br/>
			${email} <br/>
			Número de teléfono: <br/>
			${phoneCod + ' ' + phoneNumber} <br/>
      País: <br/>
			${country} <br/>
			</p>`,
    };
    try {
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Server is ready to take our messages");
            resolve(success);
          }
        });
      });

      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });

      // transporter.sendMail(mailOptions);
      res.status(200).json({ ok: true });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        ok: false,
        error,
      });
    }
  }
};

export default handler;