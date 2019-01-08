const express = require("express");
const app = express();
const quizRouter = require("./routes/quizRouter");
const router = require("./routes/router");

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

app.use("/", router);
app.use("/api", quizRouter);

app.listen("3000", () => {
  console.log("Trivial quiz app listening on port 3000!");
});
