
exports.up = function(knex, Promise) {
  return knex.schema.createTable('medications', function(table) {
      table.increments('id').primary()
      table.string('drug_name').notNullable()
      table.timestamps(true, true)
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('medications')
}
