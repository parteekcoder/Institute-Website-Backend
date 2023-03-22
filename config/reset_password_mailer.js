const nodemailer = require('nodemailer');

const smtp = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: 'false',
    auth: {
        user: 'adityag.it.21@nitj.ac.in',
        pass: 'cmdjqobpnqouyobi'
    }
};

let transport = nodemailer.createTransport(smtp);

module.exports = transport;