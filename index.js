const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/route1", (req, res) => {
  res.status(200).send("Hello World from route1");
});

app.get("/chat", (req, res) => {
  res.send("<html><body><h1>chat</h1></body></html>");
});

app.listen(port, () => {
  console.log(`the server is listening at port : ${port}`);
});
