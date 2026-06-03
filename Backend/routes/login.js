import { Router } from "express";
import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const login = Router();

login.get("/", (req, res) => {
  res.send("this is a login page");
});

login.post("/", async (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 12;
  console.log(username);
  // console.log(email);
  console.log(password);

  try {
    const user = await db.oneOrNone("select * from users where username = ${username}", { username : username });
    const hash = await bcrypt.hash(password, saltRounds);
    const match = await bcrypt.compare(password, user["password"]);
    if (match) {
        const token = jwt.sign(
            {username:username},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        )
        // const access_token = process.env.JWT_SECRET
      res.status(200).json({message : "login successful", token});
    } else {
    //   res.send("not logged in");
      res.status(404).send("user not found")
    }
  } catch (err) {
    console.log(err);
    
  }
});

export { login };
