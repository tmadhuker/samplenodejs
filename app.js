const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Updated");
});

app.get("/madhuker", (req, res) => {
  res.send("madhuker tho chalagatam vadhu");
});

app.get("/purushottam", (req, res) => {
  res.send("purushottam tho chalagatam vadhu");
});

//hello there testing

const port = process.env.port || 3000;
app.listen(port, () => {});
