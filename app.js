const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  res.send(`<h1>IP Address: ${ip}</h1>`);
  console.log(req.headers["user-agent"]);
  console.log(req.connection.remoteAddress);
});

app.listen(port);
