var db = require("./../service/dbservices.js");

const createPost = (req, res,next) => {
    console.log("inside post request: ", req.body);
    db.createPost(req.body).then((response) => {
        return res.status(200).json({
            status: true
            });
    });
}

module.exports = {createPost}