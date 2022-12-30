const express = require("express");
const app = express();
const port = 3000;

const os = require("os");
const hostname = os.hostname();

app.get("/", (req, res) => {
  res.send(`Hello World version deployed by Jenkins version 2 in asg from ${hostname} at ${new Date()}!`);
});

app.get("/test", (req, res) => {
  res.send(`New path version deployed by Jenkins version 2 in asg from ${hostname} at ${new Date()}!`);
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
