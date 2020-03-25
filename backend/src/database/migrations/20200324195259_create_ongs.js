
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.string('cidade').notNullable()
      table.string('uf', 2).notNullable()
  } )
};

exports.down = function(knex) {  /* esse geralmente é usado para dar o DROP */
  return knex.schema.dropTable('ongs')
};
