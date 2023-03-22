const Faculty = require("../models/Faculty");
const nodemailer = require("../config/reset_password_mailer");
const crypto = require("crypto");
const ResetPassword = require("../models/ResetPassword");
const bcrypt = require('bcrypt');

module.exports.resetEmailHandler = async function (req, res) {
  try {
    const faculty = await Faculty.find({ email: req.body.email });
    const dept = req.params.dept;

    if (faculty[0]?._id) {
      const token = crypto.randomBytes(20).toString("hex");


      const resetToken = await ResetPassword.create({
        user_id: faculty[0]?._id,
        token_id: token,
        createdOn: Date.now(),
      });

      await nodemailer.sendMail(
        {
          from: "adityanmt@gmail.com",
          to: req.body.email,
          subject: "Reset your Password",
          html: `<div>
                <button class="rounded-xl p-2 hover:bg-red-400 bg-red-200"><a href="http://localhost:3000/dept/confirmation/${token}">Reset your password</a></button>
            
                <p>If the above button does not work, please copy this link and open in your browser :</p>
            
                <h1>
                    <a href="http://localhost:3000/dept/${dept}/confirmation/${token}">http://localhost:3000/dept/${dept}/confirmation/${token}</a>
                </h1>
            </div>`,
        },
        function (err, info) {
          if (err) {
            console.log(err);
            return res.redirect(
              "http://localhost:3000/dept/cse/onClickForgotPass/failure"
            );
          }
        }
      );
    }

    return res.redirect(
      "http://localhost:3000/dept/cse/onClickForgotPass/success"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.checkToken = async function (req, res) {
  const token = req.params.token;
  const resetPasswordToken = await ResetPassword.find({ token_id: token });
  let isValid = false;

  if (Date.now() - resetPasswordToken[0]?.createdOn.getTime() < 90909309340300) {
    isValid = true;
  }

  if (req.method == "GET") {
    if (resetPasswordToken && isValid) {
      return res.status(200).json({
        isValid: true,
      });
    }

    return res.status(200).json({
      isValid: false,
    });
  }
};

module.exports.modifyPassword = async function (req, res) {
  const token = req.params.token;
  const dept = req.params.dept;
  const resetPasswordToken = await ResetPassword.find({ token_id: token });
  const id = resetPasswordToken[0]?.user_id;
  
  if (resetPasswordToken) {
    if (req.body.password == req.body.repassword) {
        if(req.body.password){
            let password = await bcrypt.hash(req.body.password,10);
            console.log(password);
            await Faculty.findByIdAndUpdate(resetPasswordToken[0]?.user_id, {$set: {"password": password}});
            await ResetPassword.deleteMany({user_id: resetPasswordToken[0]?.user_id});
            return res.status(200).redirect(`http://localhost:3000/dept/${dept}/faculty/${id}`);
        }
    }
    return res.status(200).redirect(`http://localhost:3000/${dept}/facult`);
  }
};
