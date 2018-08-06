
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('serviceanimals_servicetypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('serviceanimals_servicetypes').insert([
        {serviceanimal_id: 1, servicetype_id: 2},
        {serviceanimal_id: 1, servicetype_id: 3},
        {serviceanimal_id: 2, servicetype_id: 1},
        {serviceanimal_id: 3, servicetype_id: 1},
        {serviceanimal_id: 2, servicetype_id: 1},
        {serviceanimal_id: 3, servicetype_id: 2},
      ]);
    });
};
