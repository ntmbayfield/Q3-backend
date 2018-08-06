
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Cherry Chihuahua', email: 'rexrex1@gmail.com', password: 'dogbones', condition: 'asthma', emergency_contact: '650-959-9999'},
        {id: 2, name: 'Larry Beagle', email: 'beaglesarethebest@ymail.com', password: 'eagerbeaglegetstheworm', condition: 'diabetic', emergency_contact: '415-411-4111'},
        {id: 3, name: 'Patricia Poodle', email: 'iheartpoodles@outlook.com', password: 'poodlepower', condition: 'epilepsy', emergency_contact: '510-555-5555'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
    })
}
