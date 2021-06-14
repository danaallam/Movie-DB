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

app.get("/hello/:id", function (req, res) {
  const { id } = req.params;
  res.send({ status: 200, message: "Hello, " + id });
});

app.get("/hello/", function (req, res) {
  const { id } = req.params;
  res.send({ status: 200, message: "Hello, unknown" });
});

app.get("/search", function (req, res) {
  const data = req.query.s;
  if (data)
    res.send({
      status: 200,
      message: "ok",
      data: data,
    });
  else
    res.status(500).send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
});
