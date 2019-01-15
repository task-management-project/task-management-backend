
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments()
    table.integer('team_id').references('teams.id')
    table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable()
    table.string('name').notNullable()
    table.text('description')
    table.text('thoughts')
    table.string('status').notNullable()
    table.timestamps(true, true)
  })
};
  
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};
  