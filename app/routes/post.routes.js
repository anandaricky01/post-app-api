module.exports = (app) => {
  const PostController = require("../controllers/post.controller");
  const router = require("express").Router();

  router.get("/", PostController.findAll);
  router.post("/", PostController.create);

  app.use("/api/posts", router);
};
