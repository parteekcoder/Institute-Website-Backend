const nodemailer = require('nodemailer');

const smtp = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: 'false',
    auth: {
        user: '',
        pass: ''
    }
};

let transport = nodemailer.createTransport(smtp);

module.exports = transport;
