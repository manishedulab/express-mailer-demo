const express = require('express');
// const nodemailer = require('nodemailer');
const mailer = require('express-mailer');

const app = express();

app.set('view engine', 'ejs');

mailer.extend(app, {
    from: 'manish@edulab.in',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: 'kjgk@edulab.in',
      pass: 'hyjghjkghkgh'
    }
  });

  app.get('/', function (req, res, next) {
    res.mailer.send('manish', {
      to: 'asif@edulab.in, manish@edulab.in,riteshyadav@edulab.in,', // REQUIRED. This can be a comma delimited string just like a normal email to field. 
      cc:'shani@edulab.in',
      bcc:'roopayadav@edulab.in',
      subject: 'Test Email', // REQUIRED.
      otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
    }, function (err) {
      if (err) {
        // handle error
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      res.send('Email Sent');
    });
  });


  app.listen(3000,()=>{
    console.log("server is running on port 3000")
  })
