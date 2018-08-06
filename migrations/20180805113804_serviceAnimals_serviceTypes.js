
exports.up = function(knex, Promise) {
  return knex.schema.createTable('serviceanimals_servicetypes', function(table) {
  table.integer('serviceanimal_id').unsigned();
  table.foreign('serviceanimal_id')
       .references('serviceanimals.id')
//       .inTable('serviceanimals')
       .onDelete('CASCADE')

  table.integer('servicetype_id').unsigned();
  table.foreign('servicetype_id')
       .references('servicetypes.id')
//       .inTable('servicetypes')
       .onDelete('CASCADE')
  table.timestamps(true, true)
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('serviceanimals_servicetypes')
};
