
exports.up = function(knex, Promise) {
  return knex.schema.createTable('serviceAnimals', function(table) {
      table.increments('id').primary()
      table.string('animal_name').notNullable()
      table.integer('animal_age')
      table.string('breed')
      table.integer('owner_id').unsigned()
      table.foreign('owner_id')
           .references('users.id')
           .onDelete('CASCADE')
      table.timestamps(true, true)
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('serviceAnimals')
};
