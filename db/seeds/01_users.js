exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        //need to replace hashword
        { id: 1, username: 'sarah', hashword: 'tree', position: "designer" },
        { id: 2, username: 'jamie', hashword: 'tree', position: "developer" },
        { id: 3, username: 'michael', hashword: 'tree', position: "developer" },
        { id: 4, username: 'roger', hashword: 'tree', position: "manager" },
        { id: 5, username: 'sandy', hashword: 'tree', position: "sales" },
        { id: 6, username: 'tim', hashword: 'tree', position: "developer" },
        { id: 7, username: 'matt', hashword: 'tree', position: "pm" }
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
        )
    })
};
