// npm i knex
// npx knex or npx run knex
// knex init to create this file, or if you're using TypeScript, add a -x ts at the back
//<Store this file in root of your project>
// create a 'db' or 'database' folder
// Update with your config settings.
const DB_URL =
  process.env.DB_URL ??
  "postgres://pwddrxwa:d7fNZo35tih9nkXrVRdwPI-hF3jonNhN@tiny.db.elephantsql.com/pwddrxwa";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: DB_URL,
    migrations: {
      directory: "./db/Migrations",
    },
    seeds: { directory: "./db/Seeds" },
  },

  staging: {
    client: "pg",
    connection: DB_URL,
    migrations: {
      directory: "./db/Migrations",
    },
    seeds: { directory: "./db/Seeds" },
  },

  production: {
    client: "pg",
    connection: DB_URL,
    migrations: {
      directory: "./db/Migrations",
    },
    seeds: { directory: "./db/Seeds" },
  },
};

//run knex migrate:make <tablename>
// to create a seed, run knex seed:make <tablename>
//? For both, if you use TypeScript, add "-x ts" at the back
