
exports.up = function(knex, Promise) {
    return knex.schema.createTable('teams', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.text('description')
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('teams')
};
  