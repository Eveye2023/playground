/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('score').del()
  await knex('score').insert([
    {game_id: 1, user_id:1, score: 1000},
    {game_id: 1, user_id:2, score: 1000},
    {game_id: 1, user_id:3, score: 1000}
  ]);
};
