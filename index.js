const express = require("express");
const app = express();
const port = 3000;

const os = require("os");
const hostname = os.hostname();

const branch = 'UAT'

app.get("/", (req, res) => {
  res.send(`Branch ${branch}: Hello World version deployed by Jenkins version triggered by GitHub Webhook in asg from ${hostname} at ${new Date()}!`);
});

app.get("/test", (req, res) => {
  res.send(`Branch ${branch}: New path version deployed by Jenkins version triggered by GitHub Webhook in asg from ${hostname} at ${new Date()}!`);
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
