exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        //need to replace hashword
        { id: 1, username: 'sarah', hashword: '$2a$10$8adZnSLxC2VTqvkuoahKRuSdYT72JhfG4tv3jhZEjdwjPiyBMqd.q', position: "designer" },
        { id: 2, username: 'jamie', hashword: '$2a$10$8adZnSLxC2VTqvkuoahKRuSdYT72JhfG4tv3jhZEjdwjPiyBMqd.q', position: "developer" },
        { id: 3, username: 'michael', hashword: '$2a$10$8adZnSLxC2VTqvkuoahKRuSdYT72JhfG4tv3jhZEjdwjPiyBMqd.q', position: "developer" },
        { id: 4, username: 'roger', hashword: '$2a$10$8adZnSLxC2VTqvkuoahKRuSdYT72JhfG4tv3jhZEjdwjPiyBMqd.q', position: "manager" },
        { id: 5, username: 'sandy', hashword: '$2a$10$8adZnSLxC2VTqvkuoahKRuSdYT72JhfG4tv3jhZEjdwjPiyBMqd.q', position: "sales" },
        { id: 6, username: 'tim', hashword: '$2a$10$8adZnSLxC2VTqvkuoahKRuSdYT72JhfG4tv3jhZEjdwjPiyBMqd.q', position: "developer" },
        { id: 7, username: 'matt', hashword: '$2a$10$8adZnSLxC2VTqvkuoahKRuSdYT72JhfG4tv3jhZEjdwjPiyBMqd.q', position: "pm" }
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    })
};
