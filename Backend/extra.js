import express from "express";
import pgPromise from "pg-promise";

const app = express();
const pgp = pgPromise({})

const db = pgp({
    host: "localhost",
    port: 5432,
    database: "ORBIX",
    user: "postgres",
    password: "Nisarg@2005",
})

app.get("/", async (req, res) => {
    try {
        const data = await db.one("SELECT NOW()");
        res.json(data);
    } catch (err) {
        console.log(err);
        res.send("Database Error");
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});


// import express from "express";
// // const { Pool } = require("pg");
// import { Pool } from "pg";

// const app = express();

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   database: "ORBIX",
//   user: "postgres",
//   password: "Nisarg@2005",
// });

// app.get("/", async (req, res) => {
//   try {
//     const data = await pool.query("SELECT NOW()");
//     res.json(data.rows[0]);
//   } catch (err) {
//     console.log(err);
//     res.send("Database Error");
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });