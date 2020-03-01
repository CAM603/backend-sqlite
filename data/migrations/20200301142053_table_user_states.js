
exports.up = function(knex) {
    return knex.schema.createTable('user_states', table => {
        table.increments()
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_states')
};
