const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("quiz");
});

app.listen("3000", () => {
  console.log("Trivial quiz app listening on port 3000!");
});