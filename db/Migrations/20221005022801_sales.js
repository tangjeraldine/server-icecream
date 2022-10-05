/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("sales", (tbl) => {
    tbl.increments();
    tbl.text("flavours", 128).notNullable();
    tbl.text("pints_sold", 128).notNullable();
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("sales");

// run knex migrate:latest

// if you want to rollback the migrations (in other words, run the down function), run knex migrate:rollback
