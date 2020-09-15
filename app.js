const express = require("express");
const app = express();
const port = 3000;

app.get("/ip", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  res.send(`<h1>${ip}</h1>`);
  console.log(req.connection.remoteAddress);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
