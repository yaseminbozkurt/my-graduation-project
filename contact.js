'use strict';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'umutergene59@gmail.com',
    pass: '44209339004'
  }
});

transporter.verify(function (error, success) {

  if (error) throw error;

  console.log('Bağlantı başarıyla sağlandı');

});

let bilgiler = {
  from: 'Umut Ergene <agroplantilac@gmail.com>',
  to: 'agroplantilac@gmail.com',
  subject: 'Eposta konu başlığı',
  text: 'Eposta metin içeriği',
  html: 'Eposta <b>HTML metin içeriği</b>'
};

transporter.sendMail(bilgiler, function (error, info) {

  if (error) throw error;

  console.log('Eposta gönderildi ' + info.response);
});
