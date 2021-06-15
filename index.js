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

app.get("/movies/create", function (req, res) {
  const title = req.query.title;
  const year = req.query.year;
  const rating = req.query.rating;
  let isnum = /^\d+$/.test(year);
  if (!title || !year || !isnum || year.length < 4 || year.length > 4) {
    res.status(403).send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year",
    });
  } else {
    if (!parseFloat(rating))
      movie = { title: title, year: parseInt(year), rating: 4 };
    else
      movie = {
        title: title,
        year: parseInt(year),
        rating: parseFloat(rating),
      };
    movies.push(movie);
    res.send({ status: 200, message: movies });
  }
});

app.get("/movies/read", function (req, res) {
  res.send({ status: 200, message: movies });
});

app.get("/movies/read/by-date", function (req, res) {
  movies.sort(function (a, b) {
    return a.year - b.year;
  });
  res.send({ status: 200, message: movies });
});

app.get("/movies/read/by-rating", function (req, res) {
  movies.sort(function (a, b) {
    return b.rating - a.rating;
  });
  res.send({ status: 200, message: movies });
});

app.get("/movies/read/by-title", function (req, res) {
  movies.sort(function (a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
  res.send({ status: 200, message: movies });
});

app.get("/movies/update", function (req, res) {});

app.get("/movies/delete", function (req, res) {});

app.get("/movies/read/id/:id", function (req, res) {
  const { id } = req.params;
  if (0 < id && id <= movies.length) {
    let i = parseInt(id);
    res.send({ status: 200, data: movies[i - 1] });
  } else
    res.status(404).send({
      status: 404,
      error: true,
      message: "the movie id does not exist",
    });
});
