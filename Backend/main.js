import express from "express";
import db from "./db.js";

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is your homepage or for you page");
});

app.get("/account/:username", (req, res) => {
  res.send(`this will show the account of the ${req.params.username}`);
});

app.post("/post/image", (req, res) => {
  res.send("this will add/create image post");
});
    
app.post("/post/video", (req, res) => {
  res.send("this will add/create video post");
});

app.listen(port,() => { 
    console.log(`server is listening on port http://localhost:${port}`)
 })