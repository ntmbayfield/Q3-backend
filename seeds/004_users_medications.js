
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_medications').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_medications').insert([
        {user_id: 1, medication_id: 1},
        {user_id: 1, medication_id: 3},
        {user_id: 2, medication_id: 1},
        {user_id: 2, medication_id: 2},
        {user_id: 3, medication_id: 2},
        {user_id: 2, medication_id: 3},
        {user_id: 1, medication_id: 2},
      ]);
    });
};
