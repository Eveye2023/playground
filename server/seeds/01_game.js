/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('game').del()
  await knex('game').insert([
    {name: 'memory_game'},
    {name: 'what_a_mole'},
    {name: 'falppy_bird'}
  ]);
};
