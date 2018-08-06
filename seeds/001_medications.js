
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('medications').del()
    .then(function () {
      // Inserts seed entries
      return knex('medications').insert([
        {id: 1, drug_name: 'Prednisone'},
        {id: 2, drug_name: 'ProAir'},
        {id: 3, drug_name: 'Amoxicillin'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('medications_id_seq', (SELECT MAX(id) FROM medications))")
      })
    })
}
