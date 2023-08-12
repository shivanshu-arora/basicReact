var db = require("./../service/dbservices.js");

const getAllPosts = (req, res,next) => {
    console.log("inside get request");
    db.getPosts().then((posts) => {
        console.log("received: ", posts);
        return res.status(200).json({
            status: true,
            posts: posts
            });
    });
}

const upvote = (req, res, next) => {
    return res.status(200).json({
        status: true,
        posts: [
            {
                "Title" : "Post1",
                "Category": "Science",
                "Content" : "blah 1",
                "Votes": 3
            }
        ]
      });
}

module.exports = {getAllPosts, upvote};

