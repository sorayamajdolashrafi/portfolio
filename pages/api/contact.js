export default function (req, res) {
    require('dotenv').config();

    const PASSWORD = process.env.PASSWORD;
    const EMAIL = process.env.EMAIL;
    const DEVMAIL = process.env.DEVMAIL

    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: DEVMAIL,
            pass: PASSWORD
        },
        secure: true,
    });

    const mailData = {
        from: DEVMAIL,
        to: EMAIL,
        subject: `Hey cutie, ${req.body.sender} sent you a message from your dev site`,
        text: req.body.message + " | sent from: " + req.body.email,
        html: `<div>
                <h1 style="font-family: 'IBM Plex Sans', sans-serif;
                font-size: 16px; font-weight: 600">from: ${req.body.sender}</h1>
                <h2 style="font-family: 'IBM Plex Sans', sans-serif;
                font-size: 14px; font-weight: 600">${req.body.email}</h2>
                <p style="font-family: 'IBM Plex Sans', sans-serif;
                font-size: 14px; font-weight: 400">${req.body.message}</p>
            </div>`
    };

    transporter.sendMail(mailData, function (err, info) {
        if(err) {
            console.log(err)
        } else {
            console.log(info)
        }
        res.status(200)
    })
    
    console.log(req.body)
}