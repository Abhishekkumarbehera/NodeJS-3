const express = require("express");
const app = express();
const port = 3007;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}`));

app.get("/metrics", function (req, res) {
  var object = req.query.object;
  var metric = req.query.metric;
  var radius = req.query.radius;

  
  const open = 1.33 * 3.14 * radius * radius * radius;
  
  console.log("volume :", open);
  res.send(`${metric} of ${object} is ${open}`);
});

//http://localhost:3007/metrics?object=circle&metric=volume&radius=5