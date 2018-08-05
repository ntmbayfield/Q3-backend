
exports.up = function(knex, Promise) {
  return knex.schema.createTable('serviceAnimals_serviceTypes', function(table) {
  table.integer('animal_id').unsigned();
  table.foreign('animal_id')
       .references('serviceAnimals.id')
       .onDelete('CASCADE')

  table.integer('service_id').unsigned();
  table.foreign('service_id')
       .references('serviceTypes.id')
       .onDelete('CASCADE')
  table.timestamps(true, true)
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('serviceAnimals_serviceTypes')
};
