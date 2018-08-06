
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('servicetypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('servicetypes').insert([
        {id: 1, name_of_service: 'Seizure Recognition'},
        {id: 2, name_of_service: 'Allergy Detection'},
        {id: 3, name_of_service: 'Hypoglycemic Distress'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('servicetypes_id_seq', (SELECT MAX(id) FROM servicetypes))")
      })
    })
}
