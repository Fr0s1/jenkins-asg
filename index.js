const express = require("express");
const app = express();
const port = 3000;

const os = require("os");
const hostname = os.hostname();

app.get("/", (req, res) => {
  res.send(`Hello World version 2 from ${hostname}!`);
});

app.get("/test", (req, res) => {
  res.send(`New path version 2 from ${hostname}!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
