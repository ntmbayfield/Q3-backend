
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable().unique('email')
      table.string('password').notNullable()
      table.string('condition').notNullable()
      table.string('emergency-contact').notNullable()
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tablename')
};
