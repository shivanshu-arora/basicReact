const getAllPosts = (req, res,next) => {
    return res.status(200).json({
        status: true,
        posts: [
            {
                "title" : "Post1",
                "Category": "Science",
                "Content" : "blah 1",
                "Votes": 2
            },
            {
                "title" : "Post2",
                "Category": "Health",
                "Content" : "blah 2",
                "Votes": 3
            }
        ]
      });
}

const upvote = (req, res, next) => {
    return res.status(200).json({
        status: true,
        posts: [
            {
                "title" : "Post1",
                "Category": "Science",
                "Content" : "blah 1",
                "Votes": 3
            }
        ]
      });
}

module.exports = {getAllPosts, upvote};