/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("sales").del();
  await knex("sales").insert([
    { id: 1, flavours: "Earl Grey Lavender", pints_sold: "98" },
    { id: 2, flavours: "Cendol", pints_sold: "67" },
    { id: 3, flavours: "Milo Gao", pints_sold: "115" },
  ]);
};

// run knex seed:run
