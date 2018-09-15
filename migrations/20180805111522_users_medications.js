
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users_medications', function(table) {
    table.integer('user_id').unsigned();
    table.foreign('user_id')
         .references('users.id')
         .onDelete('CASCADE')

    table.integer('medication_id').unsigned();
    table.foreign('medication_id')
         .references('medications.id')
         .onDelete('CASCADE')

    table.string('dosage')
    table.timestamps(true, true)
  });
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users_medications')
};
