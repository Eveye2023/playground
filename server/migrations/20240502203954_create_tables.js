/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("email").notNullable().unique().index();
      table.string("name").nullable();
      table.string("password").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("game", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .createTable("score", (table) => {
      table.increments("id").primary();
      table
        .integer("game_id")
        .unsigned()
        .references("game.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("score").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("worksheet", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("content").notNullable();
      table.boolean("public").defaultTo(false);
      table.integer("likes").defaultTo(0);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("score").dropTable("game").dropTable("worksheet").dropTable("user");
};
