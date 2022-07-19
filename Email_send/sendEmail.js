var nodemailer = require('nodemailer');

//send email
exports.sendingMail = ("example@gmail.com", token) => {

    var email = email;
    var token = token;

    var mail = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: 'aastulibraryproject@gmail.com', // Your email id
            pass: 'uzpankczzlcdjhht' // Your password
        }
    });

    console.log('email is: ' + email)

    var mailOptions = {
        from: 'aastulibraryproject@gmail.com',
        to: email,
        subject: 'Reset Password Link',
        html: '<p>You requested for reset password, kindly use this' +
            '<a href="http://localhost:5000/auth/reset_password?token=' + token + '">' +
            ' link</a> to reset your password</p>'
    };

    mail.sendMail(mailOptions, function (error, info) {
        if (!error)
            console.log('reset link sent...')
        else
            console.log('Error: link not sent' + error)
    });

}
