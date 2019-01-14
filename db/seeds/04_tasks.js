
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, team_id: 1, user_id: 1, name: "A", description: 'abcc', thoughts: 'aa', status: "pending"},
        {id: 2, team_id: 1, user_id: 1, name: "B", description: 'efg', thoughts: 'bb', status: "active"},
        {id: 3, team_id: 1, user_id: 1, name: "C", description: 'hij', thoughts: 'cc', status: "finished"},
        {id: 4, team_id: 1, user_id: 2, name: "D", description: 'klmn', thoughts: 'dd', status: "active"},
        {id: 5, team_id: 1, user_id: 2, name: "E", description: 'opqr', thoughts: 'dd', status: "finished"},
        {id: 6, team_id: 1, user_id: 2, name: "F", description: 'stuv', thoughts: 'dd', status: "finished"},
        {id: 7, team_id: 1, user_id: 3, name: "G", description: 'wxyzs', thoughts: 'dd', status: "pending"},
        {id: 8, team_id: 1, user_id: 3, name: "H", description: 'abc', thoughts: 'ee', status: "active"},
        {id: 9, team_id: 1, user_id: 3, name: "I", description: 'def', thoughts: 'ee', status: "finished"},
        {id: 10, team_id: 1, user_id: 4, name: "J", description: 'ghij', thoughts: 'ee', status: "active"},
        {id: 11, team_id: 1, user_id: 5, name: "K", description: 'klmn', thoughts: 'dd', status: "active"},
        {id: 12, team_id: 1, user_id: 5, name: "L", description: 'sopqr', thoughts: 'ff', status: "active"},
        {id: 13, team_id: 1, user_id: 6, name: "M", description: 'stuv', thoughts: 'dd', status: "active"},
        {id: 14, team_id: 1, user_id: 7, name: "N", description: 'wxyz', thoughts: 'dd', status: "active"},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('tasks_id_seq', (SELECT MAX(id) FROM tasks));`
        )
    })
};
