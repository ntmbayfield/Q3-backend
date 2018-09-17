exports.up = function(knex, Promise) {
  return knex.schema.createTable('devices_users', function (table) {
    table.increments('id').primary()
    table.integer('user_id').unsigned()
    table.foreign('user_id')
         .references('id')
         .inTable('users')
         .onDelete('CASCADE')

    table.string('serialNum').unsigned()
    table.foreign('serialNum')
         .references('serialNum')
         .inTable('devices')
         .onDelete('CASCADE')
    table.timestamps(true, true)
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('devices_users')
};
