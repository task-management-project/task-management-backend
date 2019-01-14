exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        //need to replace hashword
        { id: 1, name: 'A', description: "Android app project" },
        { id: 2, name: 'B', description:  "Project A"}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('teams_id_seq', (SELECT MAX(id) FROM teams));`
        )
    })
};
