const { render } = require("ejs");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const user = {
  name: "vinay",
  age: 20,
  number: [1, 2, 3, 3, 4, 5],
};
app.get("/", (req, res) => {
  res.render("pages/index", {
    user: user,
  });
});

app.listen(port, () => {
  console.log("The server is running on port ", port);
});
