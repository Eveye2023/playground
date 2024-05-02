/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  const results = await knex('user').insert([
    {name: "Anna", password: 'password123'},
    {name: "Simon", password: 'password123'},
    {name: "Joy", password: 'password123'}]);
    console.log("user seeding results", results)
};
