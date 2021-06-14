const express = require("express");
const app = express();
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3000, () => console.log("Successful response"));

app.get("/test", function (req, res) {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", function (req, res) {
  res.send({ status: 200, message: time });
});
