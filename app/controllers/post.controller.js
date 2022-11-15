module.exports = (app) => {
  const router = require("express").Router();
  const db = require("../models/index");
  const { check, validationResult } = require("express-validator");
  const Post = db.posts;

  router.get("/", (req, res) => {
    Post.find()
      .then(async (result) => {
        return res.send({
          postCount: await Post.countDocuments(),
          posts: result,
        });
      })
      .catch((err) => {
        return res.send(`Something is wrong, err : ${err.message}`);
      });
  });

  router.post("/", async (req, res) => {
    checkPost = await Post.findOne({ title: req.body.title });
    if (checkPost) {
      return res.send({
        message: "The title shouldn't be same with the others Post's Title",
      });
    }

    const title = req.body.title;
    const category = req.body.category;
    const body = req.body.body;
    const date = req.body.date;

    var slug = req.body.title;
    slug = slug.toLowerCase();
    slug = slug.split(" ");
    slug = slug.join("-");

    const post = new Post({
      title: title,
      category: category,
      body: body,
      date: date,
      slug: slug,
    });

    post
      .save(post)
      .then((result) => {
        return res.send(result);
      })
      .catch((err) => {
        return res.send({
          message: `There's something wrong with the process ${err.message}`,
        });
      });
  });

  app.use("/api/posts", router);
};
