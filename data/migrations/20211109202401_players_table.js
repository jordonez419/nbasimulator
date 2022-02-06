
exports.up = function (knex) {
    return knex.schema
        .createTable('players', tbl => {
            tbl.increments('player_id')
            tbl.integer('rating').notNullable().unsigned()
            tbl.string('player_name').notNullable().unique()
            tbl.string('position').notNullable()
            tbl.string('height').notNullable()
            tbl.decimal('ppg').notNullable().unsigned()
            tbl.decimal('apg').notNullable().unsigned()
            tbl.decimal('rpg').notNullable().unsigned()
            tbl.string('image')

        })
};

exports.down = function (knex) {
    return knex.schema
        // .dropTableIfExists('users')
        .dropTableIfExists('players')
    // .dropTableIfExists('squads')
};
