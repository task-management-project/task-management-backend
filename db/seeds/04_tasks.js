
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, user_id: 1, name: "A", description: 'abcc', thoughts: 'aa', isFocus: false, isComplete: false},
        {id: 2, user_id: 1, name: "B", description: 'efg', thoughts: 'bb', isFocus: true, isComplete: false},
        {id: 3, user_id: 1, name: "C", description: 'hij', thoughts: 'cc', isFocus: false, isComplete: true},
        {id: 4, user_id: 2, name: "D", description: 'klmn', thoughts: 'dd', isFocus: true, isComplete: false},
        {id: 5, user_id: 2, name: "E", description: 'opqr', thoughts: 'dd', isFocus: false, isComplete: true},
        {id: 6, user_id: 2, name: "F", description: 'stuv', thoughts: 'dd', isFocus: false, isComplete: true},
        {id: 7, user_id: 3, name: "G", description: 'wxyzs', thoughts: 'dd', isFocus: false, isComplete: false},
        {id: 8, user_id: 3, name: "H", description: 'abc', thoughts: 'ee', isFocus: true, isComplete: false},
        {id: 9, user_id: 3, name: "I", description: 'def', thoughts: 'ee', isFocus: false, isComplete: true},
        {id: 10, user_id: 4, name: "J", description: 'ghij', thoughts: 'ee', isFocus: true, isComplete: false},
        {id: 11, user_id: 5, name: "K", description: 'klmn', thoughts: 'dd', isFocus: true, isComplete: false},
        {id: 12, user_id: 5, name: "L", description: 'sopqr', thoughts: 'ff', isFocus: true, isComplete: false},
        {id: 13, user_id: 6, name: "M", description: 'stuv', thoughts: 'dd', isFocus: false, isComplete: false},
        {id: 14, user_id: 7, name: "N", description: 'wxyz', thoughts: 'dd', isFocus: false, isComplete: true},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('tasks_id_seq', (SELECT MAX(id) FROM tasks));`
      )
    })
};
