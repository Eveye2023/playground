const bcrypt = require("bcryptjs");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  const results = await knex("user").insert([
    { email: "anna@example.com", password: bcrypt.hashSync("password123", 8) },
    { email: "simon@example.com", password: bcrypt.hashSync("password123", 8) },
    { email: "joy@example.com", password: bcrypt.hashSync("password123", 8) },
  ]);
  console.log("user seeding results", results);
};
