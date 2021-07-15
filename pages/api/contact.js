require('dotenv').config();

export default function (req, res) {
    return new Promise(resolve => {
        const PASSWORD = process.env.PASSWORD;
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
            to: 'hello@sorayabenson.com',
            replyTo: `${req.body.email}`,
            subject: `${req.body.sender} sent you a message from your dev site!`,
            text: req.body.message + " | sent from: " + req.body.email,
            html: `<div style="width: 85%; height: auto; border: #FFD401 15px solid; padding: 1rem;">
    
                    <p style="font-family:'IBM Plex Sans', sans-serif; font-size: 14px; font-weight: 400">
                            ${req.body.message}
                    </p>
                        
                    <h1 style="font-family: 'IBM Plex Sans', sans-serif; font-size: 14px; font-weight: 500; color: #0A2728;">
                        from: ${req.body.sender} ${req.body.email}
                    </h1>
                    
                </div>`
        };
    
        transporter.sendMail(mailData, function (err, info) {
            if(err) {
                console.log(err)
                resolve();
            } else {
                console.log(info)
                resolve();
            }
        })
       
        console.log(req.body)
        res.status(200).end();
        return resolve();
    })
    
}