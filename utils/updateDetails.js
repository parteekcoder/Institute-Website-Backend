
//----------------------------------------------------------------------->
const updateDetails = async (req, res, next) => {
    req.body.updateDate = Date.now();
    next();
}

//Export----------------------------->
module.exports = updateDetails;