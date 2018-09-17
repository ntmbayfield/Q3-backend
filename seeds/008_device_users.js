
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('devices_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('devices_users').insert([
        {id: 1, user_id: 1, serialNum: 'G030MD0402648GB1'},
        {id: 2, user_id: 2, serialNum: 'H040ND0503758GB2'},
        {id: 3, user_id: 3, serialNum: 'I050OD0604868GB3'},
        {id: 4, user_id: 4, serialNum: 'J060PD0705978GB4'},
        {id: 5, user_id: 5, serialNum: 'K070QD0806088GB5'},
        {id: 6, user_id: 6, serialNum: 'L080RD0907198GB6'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('devices_id_seq', (SELECT MAX(id) FROM devices_users))")
      })
    });
};
