import { createTransport } from "nodemailer";

const sendMail = async(email,subject,text) => {
    // configure
    const transporter = createTransport({
        host:"smtp.gmail.com",
        port: 465,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.EPASS
        }
    })

    // send Mail
    await transporter.sendMail({
        from:process.env.EMAIL,
        to:email,
        subject,
        text
    })
}

export default sendMail