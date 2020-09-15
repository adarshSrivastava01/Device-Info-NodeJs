const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  const headers = req.headers["user-agent"];
  res.send(`<h1>IP Address: ${ip} ${headers}</h1>`);
});

app.listen(port);
