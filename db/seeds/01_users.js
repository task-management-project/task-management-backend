exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        //need to replace hashword
        { id: 1, username: 'sarah', hashword: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ3NTg4OTc3fQ.hzAvDFObrxSozq4DcvedW38kYRC85-hxhscUUT1ybJ4', position: "designer" },
        { id: 2, username: 'jamie', hashword: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTQ3NTg5MjAzfQ.Q2m33duLaOuqHLr7qIK3fbcl4U1tw8ee33ZBXlPwtFM', position: "developer" },
        { id: 3, username: 'michael', hashword: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTQ3NTg5MjMxfQ.1D3ty8WgVLEQJxHwvAmty_Tyb6CiIqNDH8_Yr4Gy6Ws', position: "developer" },
        { id: 4, username: 'roger', hashword: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTQ3NTg5MjUzfQ.kdxmFal155q8GEIGzCRAXGwvRo_tZd5Vg4V5Jl18ucY', position: "manager" },
        { id: 5, username: 'sandy', hashword: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTQ3NTg5MjY5fQ.rcveyvKeLplKpns6qjich6q7YQqZ_vP4lqY94w8XHG0', position: "sales" },
        { id: 6, username: 'tim', hashword: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTQ3NTg5Mjg1fQ.8iKnu0ZPxvm2_z9DOo83wfrGlM1wa9-ZvwCDzTQcfYc', position: "developer" },
        { id: 7, username: 'matt', hashword: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNTQ3NTg5MzAyfQ.XWSHU5mcNx9SzaIlEGcWsKS75vtTwTFoEGb2vXYsnHk', position: "pm" }
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    })
};
