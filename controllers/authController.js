const Faculty = require('../models/Faculty');
const PhdScholar = require('../models/PhdScholar');
const Sessions = require('../models/session');

module.exports.checkAuthentication = function(req,res){
    
}

module.exports.signInAuthentication = async function(req,res,next){
    const id = req.params.id;
    const cookie = req.cookies;
    var flag = false;
    if(cookie) flag =true;

    try {
        if(flag){
            const sessionID = cookie.session;

            let session = await Sessions.findById(sessionID);

            if(session){

                if(session.user_id == id){
                    req.user = {
                        isFaculty: true,
                        login: true
                    }
                }

                else{
                    req.user = {
                        isFaculty: false,
                        login: true
                    }
                }

                next();
                return;
            }

            else{

                req.user = {
                    isFaculty: false,
                    login: false
                }
            }
        }
    } catch (error) {
        console.log(error)
    }

    next();
}

module.exports.createSession = async function(req,res) {
    const dept = req.params.dept;
    try{
        const User = await Faculty.find({email: req.body.email});

        console.log(User);

        const session = await new Sessions({
            user_id: User[0]._id
        });

        session.save((err, id) => {
            return res.cookie('session', id._id,{maxAge: 24 * 60 * 60 * 1000 * 15, path: '/', withCredentials: true}).redirect(`http://localhost:3000/dept/${dept}/Home`);
        });
    }
    catch(err){
        console.log(err);
    }
}
