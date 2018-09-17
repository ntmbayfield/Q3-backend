
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Cherry Chihuahua', email: 'rexrex1@gmail.com', password: 'dogbones', condition: 'asthma', emergency_contact_name: 'Ashley', emergency_contact_number: '650-959-1111', emergency_contact_method: 'text'},

        {id: 2, name: 'Larry Beagle', email: 'beaglesarethebest@ymail.com', password: 'eagerbeaglegetstheworm', condition: 'diabetic', emergency_contact_name: 'Justin', emergency_contact_number: '415-411-2222', emergency_contact_method: 'text'},

        {id: 3, name: 'Patricia Poodle', email: 'iheartpoodles@outlook.com', password: 'poodlepower', condition: 'epilepsy', emergency_contact_name: 'Sherif', emergency_contact_number: '510-555-3333', emergency_contact_method: 'text'},

        {id: 4, name: 'Sally Shepard', email: 'sshepard@gmail.com', password: 'rawhyde', condition: 'epilepsy', emergency_contact_name: 'Idelia', emergency_contact_number: '707-959-4444', emergency_contact_method: 'phone'},

        {id: 5, name: 'Douglas Daschound', email: 'darlingdaschies@ymail.com', password: 'myoscarmyerweiner', condition: 'diabetic', emergency_contact_name: 'Michael', emergency_contact_number: '415-411-5555', emergency_contact_method: 'text'},

        {id: 6, name: 'Laura Labrador', email: 'lablover4ever@outlook.com', password: 'wholetthedogsout', condition: 'epilepsy', emergency_contact_name: 'Pete', emergency_contact_number: '510-555-6666', emergency_contact_method: 'text'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
    })
}
