const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serve online on PORT : ${PORT}`);
});

app.get("/api", (req, res) => {
  res.send("This is entry point of API");
});
