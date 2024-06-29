const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  const transporer = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c4ce77e1adf804",
      pass: "********64b5",
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporer.sendMail(mailOptions);
};
