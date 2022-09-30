const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const IceCreamController = require("./Controllers/IceCreamController");

app.use(cors());
app.use(express.json());
app.use("/route", IceCreamController);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ice_creams",
  password: "Th$Beebies2809",
  port: 5432,
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// const { Client } = require("pg");
// const client = new Client();

// const data = async () => {
//   await client.connect();
//   const res = await client.query("SELECT $1::text as message", [
//     "Hello world!",
//   ]);
//   console.log(res.rows[0].message); // Hello world!
//   await client.end();
// };
// data();

//! SQLite Purposes, in case your postgres doesn't connect:
// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("./db.sqlite3");

// db.serialize(() => {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//     console.log(row.id + ": " + row.info);
//   });
// });

// db.close();
