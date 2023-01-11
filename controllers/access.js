const dotenv = require("dotenv");

//configuration

dotenv.config({ path: "./../.env" });

exports.protect = async (req, res, next) => {
    if (req.headers.accesstoken) {
        console.log(req.headers.accesstoken);
        if (req.headers.accesstoken === process.env.ACCESS_TOKEN) {
            next();
        } else {
            res.status(401).json({ message: "Invalid access token" });
        }
    } else {
        res.status(401).json({ message: "Not authorized to access this route" });
    }
};
