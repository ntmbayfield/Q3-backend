
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('serviceanimals').del()
    .then(function () {
      // Inserts seed entries
      return knex('serviceanimals').insert([
        {id: 1, animal_name: 'Biscuit', animal_age: 2, animal_breed: 'chiweenie', owner_id: 3},
        {id: 2, animal_name: 'Gandolf', animal_age: 5, animal_breed: 'Jack Russell', owner_id: 1},
        {id: 3, animal_name: 'Walt', animal_age: 1, animal_breed: 'Terrier', owner_id: 2}
      ])
    })
    .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('serviceanimals_id_seq', (SELECT MAX(id) FROM serviceanimals))")
    })
};
