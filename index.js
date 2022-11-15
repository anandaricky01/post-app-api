const express = require("express");
const url = require("url");
const db = require("./app/models/index");

const PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("Can't Connect to the Database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  return res.json({
    message: "Aplikasi berjalan lancar",
  });
});

require('./app/controllers/auth.controller')(app);

app.listen(PORT, () => {
  console.log(`Mongo Post App | Listening at http://localhost:${PORT}`);
});
