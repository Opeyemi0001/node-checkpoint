const http = require('http');
require('dotenv').config();
// console.log(process.env);
const nodemailer = require('nodemailer');


const csUrl = process.env.CLIENTSECRET_URL;
const rtUrl = process.env.REFRESHTOKEN_URL;

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    type: 'OAuth2',
    user: 'opeyemiemmanuel112@gmail.com',
    clientId: '809290529850-fkr34ei3s6cp7r8m4362vngql7deiq3u.apps.googleusercontent.com',
    clientSecret: csUrl,
    refreshToken: rtUrl
  }
});

const mailOptions = {
  from: 'opeyemiemmanuel112@gmail.com',
  to: 'opeyemiOnanuga40@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'My second node.js message. 😍!  Coding is my new lifestyle',
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ` + info.response);
  }
})