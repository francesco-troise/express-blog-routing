//import di exprss
const express = require("express");

//ottenimento dell'oggetto messo a disposione dalla funzione express()
const app = express();

//Definizione della porta
const PORT = 3000;

//Import del router "PostsRouter"
const PostsRouter = require("./routers/PostsRouter");

//Settaggio del router "PostsRouter" -settaggio del prefisso relativo a "PostsRouter"
app.use("/api/posts", PostsRouter);

//Avvio del server
app.listen(PORT, () => {
  console.log(`Serve online on PORT : ${PORT}`);
});
