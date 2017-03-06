import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jgubina@gmail.com',
        pass: 'gubina22'
    }
});

// // setup email data with unicode symbols
let mailOptions = {
    from: '"Your awesome Website 👻" <contact-me@aliway.com>', // sender address
    to: 'jgubina@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Test ?', // plain text body
    html: '<b>Hello Ali ?</b>' // html body
}
console.log(mailOptions)

// // send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
})
