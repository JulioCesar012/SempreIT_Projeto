
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('descricao').notNullable();
      table.integer('valor').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
