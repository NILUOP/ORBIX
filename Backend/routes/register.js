import { Router } from "express";
import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const register = Router()

register.get("/", (req, res) => {
  res.send("this is a registration page");
});

register.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 12;
  console.log(username);
  console.log(email);
  console.log(password);
  
  try {
    const user = await db.oneOrNone("select * from users where email = $1", [
      email,
    ]);
    console.log(user);
    if (user) {
      console.log("user already exist");
      res.send("user already exist try logging in");
    } else {
      console.log("user does not exist");
      const hashed_password = await bcrypt.hash(password, saltRounds);
      
      await db.none(
        "INSERT INTO users(username, email, password) VALUES(${username}, ${email}, ${password})",
        { username: username, email: email, password: hashed_password },
      );
      res.send("new user added");
    }
  } catch (err) {
    console.log(err);
  }
});

export {register};