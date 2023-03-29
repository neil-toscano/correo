const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors=require('cors');
app.use(cors());
require('dotenv').config();
const port=process.env.PORT;
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'neil.toscano.f@uni.pe',
    pass: '20190318A.'
  }
});
let mailOptions = {
    from: 'neil.toscano.f@uni.pe',
    to: 'jacoborosseau@gmail.com',
    subject: 'Robotica',
    text: 'Usando una api'
  };
  
  
app.get('/enviarcorreo', function (req, res) {
  res.send('Hello World');
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
    }
  });
})

app.listen(port);

  