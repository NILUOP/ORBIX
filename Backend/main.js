import express from "express";
import db from "./db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import cors from "cors";

import { login } from "./routes/login.js"
import { register } from "./routes/register.js"

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/login", login);
app.use("/register",register);

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


  // console.log(hash1);
  // console.log(hash1.length);
  // console.log(hash2);
  // console.log(hash2.length);

  // // let match = verifyPassword(hash1,hash2)
  // // .then();
  // const match1 = await bcrypt.compare(password, hash1);
  // const match2 = await bcrypt.compare(password, hash2);

  // console.log(match1);
  // console.log(match2);

  // res.send("this is a registration page POST");

app.listen(port, () => {
  console.log(`server is listening on port http://localhost:${port}`);
});
