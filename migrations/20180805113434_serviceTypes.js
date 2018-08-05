
exports.up = function(knex, Promise) {
  return knex.schema.createTable('serviceTypes', function(table) {
    table.increments('id').primary()
    table.string('name_of_service')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('serviceTypes')
};
