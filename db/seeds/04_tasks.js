
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, user_id: 1, name: "Planning document", description: 'for project C', thoughts: '', isFocus: false, isComplete: false},
        {id: 2, user_id: 1, name: "Wire Frames", description: 'for project C', thoughts: 'use online tool', isFocus: true, isComplete: false},
        {id: 3, user_id: 1, name: "Assign tasks", description: 'delegate to team', thoughts: '', isFocus: false, isComplete: true},
        {id: 4, user_id: 2, name: "Plan Garden", description: 'choose plants', thoughts: 'hope for sun', isFocus: true, isComplete: false},
        {id: 5, user_id: 2, name: "Prepare Soil", description: 'weed and till', thoughts: '', isFocus: false, isComplete: true},
        {id: 6, user_id: 2, name: "Plant Seeds", description: '', thoughts: '', isFocus: false, isComplete: true},
        {id: 7, user_id: 3, name: "Schedule Team Meeting", description: 'coordinate timing', thoughts: '', isFocus: false, isComplete: false},
        {id: 8, user_id: 3, name: "Organize Office Party", description: 'gather staff favorite snacks', thoughts: '', isFocus: true, isComplete: false},
        {id: 9, user_id: 3, name: "Learn C++", description: 'for upcoming project', thoughts: '', isFocus: false, isComplete: true},
        {id: 10, user_id: 4, name: "Plan Lessons", description: '', thoughts: '', isFocus: true, isComplete: false},
        {id: 11, user_id: 5, name: "Adopt a Parakeet", description: 'preferably blue', thoughts: '', isFocus: true, isComplete: false},
        {id: 12, user_id: 5, name: "Buy a cage", description: 'for parakeet', thoughts: '', isFocus: true, isComplete: false},
        {id: 13, user_id: 6, name: "Research Cars", description: 'electric and gas', thoughts: '', isFocus: false, isComplete: false},
        {id: 14, user_id: 7, name: "File tax papers", description: 'create better system', thoughts: '', isFocus: false, isComplete: true},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('tasks_id_seq', (SELECT MAX(id) FROM tasks));`
      )
    })
};
