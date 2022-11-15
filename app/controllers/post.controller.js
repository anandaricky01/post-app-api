module.exports = (app) => {
    const router = require('express').Router();
    const db = require('../models/index');
    const Post = db.posts;

    router.get('/', (req, res) => {
        Post.find()
            .then(async (result) => {

                return res.send({
                    postCount : await Post.countDocuments(),
                    posts : result
                });
            })
            .catch((err) => {
                return res.send(`Something is wrong, err : ${err.message}`);
            });
    });

    app.use('/api/posts', router);
}