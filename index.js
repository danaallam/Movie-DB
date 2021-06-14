const express = require("express");
const app = express();
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

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

app.get("/movies/create", function (req, res) {});

app.get("/movies/read", function (req, res) {
  res.send({ status: 200, message: movies });
});

app.get("/movies/update", function (req, res) {});

app.get("/movies/delete", function (req, res) {});
