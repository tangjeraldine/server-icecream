const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../db/db");

router.use(bodyParser.json());

// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "ice_creams",
//   password: "Th$Beebies2809",
//   port: 5432,
// });

// const { Pool, Client } = require("pg");
// const connectionString =
//   "postgres://pwddrxwa:d7fNZo35tih9nkXrVRdwPI-hF3jonNhN@tiny.db.elephantsql.com/pwddrxwa";
// const pool = new Pool({
//   connectionString,
// });

//? Getting the whole list of ice creams to show
router.get("/allicecream", async (req, res) => {
  try {
    const allIceCreams = await db("SELECT * FROM ice_creams");
    res.status(200).json(allIceCreams.rows);
  } catch (error) {
    res.status(500).send(error);
  }
});

//? Getting the ice cream item from ice_creams where the name is Plain
router.get("/plain", (req, res) => {
  db(
    "SELECT * FROM ice_creams WHERE description = 'Plain'",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(results.rows[0]);
      //   res.send(results.rows[0]);
    }
  );
});

//? Getting the ice cream item from ice_creams where the name is query
router.get("/search", async (req, res) => {
  const name = req.query.name;
  try {
    const searchIceCream = await db(
      "SELECT * FROM ice_creams WHERE name = $1",
      [name]
    );
    res.status(200).json(searchIceCream.rows[0]);
    // res.send(results.rows[0]);
    // res.json({ name });
  } catch (error) {
    res.status(500).send(error);
  }
});

//? Getting the ice cream by id
router.get("/allicecream/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const thisIceCream = await db("SELECT * FROM ice_creams WHERE id = $1", [
      id,
    ]);
    res.status(200).json(thisIceCream.rows[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

//? Adding an ice cream type to ice_creams table
// pool.query(
//   "INSERT INTO ice_creams (name, pints) VALUES ($1, $2) ",
//   ["ice;;cream", 100],
//   (error, results) => {
//     if (error) {
//       throw error;
//     }
//     console.log(results);
//   }
// );

router.post("/newicecream", async (req, res) => {
  try {
    const { name, pints, has_nuts } = req.body;
    const newIceCream = await db(
      "INSERT INTO ice_creams (name, pints, has_nuts) VALUES ($1, $2, $3)",
      [name, pints, has_nuts]
    );
    res.status(200).json(newIceCream.rows[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

//? Updating an ice cream
router.put("/editicecream/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, pints, has_nuts } = req.body;
    const editIceCream = await db(
      "UPDATE ice_creams SET name =$1, pints=$2, has_nuts =$3 WHERE id=$4",
      [name, pints, has_nuts, id]
    );
    res.status(200).json(editIceCream.rows);
  } catch (error) {
    res.status(500).send(error);
  }
});

//? Deleting an ice cream
router.delete("/deleteicecream/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteIceCream = await db("DELETE FROM ice_creams WHERE id=$1", [id]);
    res.status(200).json("Ice cream was successfully deleted!");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
