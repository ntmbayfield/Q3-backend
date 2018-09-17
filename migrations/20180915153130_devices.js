
exports.up = function(knex, Promise) {
  return knex.schema.createTable('devices', function(table) {
        table.increments('id').primary()
        table.string('serialNum').notNullable().unique('serialNum')
        table.timestamps(true, true)
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('devices')
};
