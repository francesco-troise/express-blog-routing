const express = require("express");

const router = express.Router();

//Index(Prefisso del router spostato in server.js)
router.get("/", (req, res) => {
  res.send("Qui lista dei posts");
});

//Show(Prefisso del router spostato in server.js)
router.get("/:id", (req, res) => {
  res.send(`Qui il singolo post con id: ${req.params.id}`);
});

//Store(Prefisso del router spostato in server.js)
router.post("/", (req, res) => {
  res.send("Creazione nuovo elemento");
});

//Update(Prefisso del router spostato in server.js)
router.put("/:id", (req, res) => {
  res.send("Aggiornamento integrale di un elemento");
});

//Modify(Prefisso del router spostato in server.js)
router.patch("/:id", (req, res) => {
  res.send(`Piccole modifiche ad elemento con id: ${req.params.id}`);
});

//Destroy(Prefisso del router spostato in server.js)
router.delete("/:id", (req, res) => {
  res.send(`Eliminazione dell elemento con id: ${req.params.id} `);
});

module.exports = router;
