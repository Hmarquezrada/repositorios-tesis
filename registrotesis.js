const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
mongoose
  .connect(
    "mongodb://localhost:27017/repositorio",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });
var user = require("./lib5/Register");
app.get("/regtes", (req, res) => {
  user.getUsers(req, res);
});

app.get("/regtes/:id", (req, res) => {
  user.getUser(req, res);
});

app.post("/regtes", (req, res) => {
  user.newUser(req, res);
});
app.put("/regtes/:id", (req, res) => {
  user.updateUser(req, res);
});

app.delete("/regtes/:id", (req, res) => {
  user.deleteUser(req, res);
});

app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
