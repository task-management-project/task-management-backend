
exports.up = function(knex) {
  return knex.schema.createTable('teams', table => {
    table.increments()
    table.string('name').notNullable().unique()
    table.text('description')
  })
};
  
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('teams')
};
  