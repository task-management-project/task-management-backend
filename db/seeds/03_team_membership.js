
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('team_membership').del()
    .then(function () {
      // Inserts seed entries
      return knex('team_membership').insert([
        {id: 1, user_id: '1', team_id: "1", is_manager: false},
        {id: 2, user_id: '2', team_id: "1", is_manager: false},
        {id: 3, user_id: '3', team_id: "1", is_manager: false},
        {id: 4, user_id: '4', team_id: "1", is_manager: true},
        {id: 5, user_id: '1', team_id: "2", is_manager: false},
        {id: 6, user_id: '5', team_id: "2", is_manager: false},
        {id: 7, user_id: '6', team_id: "2", is_manager: false},
        {id: 8, user_id: '7', team_id: "2", is_manager: true}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('team_membership_id_seq', (SELECT MAX(id) FROM team_membership));`
      )
    })
};

