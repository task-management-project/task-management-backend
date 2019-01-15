
exports.up = function(knex) {
  return knex.schema.createTable('team_membership', table => {
    table.increments()
    table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable()
    table.integer('team_id').references('teams.id').onDelete('CASCADE').notNullable()
    table.boolean('is_manager').defaultTo(false)
  })
};
  
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('team_membership')
};
  