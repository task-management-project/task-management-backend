exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(() => knex('teams').del())
    .then(() => knex('team_membership').del())
    .then(() => knex('users').del())
}

