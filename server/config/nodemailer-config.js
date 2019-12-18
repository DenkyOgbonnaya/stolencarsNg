const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const mailUser = process.env.MAIL_USER;
const mailPass = process.env.MAIL_PASS;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: mailUser,
        pass: mailPass
    }
});

const sendMail = async(from, to, subject, message) =>{
    try {
        return await transporter.sendMail({
            from,
            to,
            subject,
            html: message
        })

    } catch (err) {
        throw err;
    }
}

module.exports = sendMail;
