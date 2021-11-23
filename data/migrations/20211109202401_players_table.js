
exports.up = function (knex) {
    return knex.schema
        .createTable('squads', tbl => {
            tbl.increments('squad_id')
            tbl.string('squad_name').notNullable().unique()
        })
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
            tbl.integer('squad_id')
                .unsigned()
                // .notNullable()
                .references('squad_id')
                .inTable('squads')
                .onDelete('CASCADE')
        })
        .createTable('users', tbl => {
            tbl.increments('user_id')
            tbl.string('username').notNullable().unique()
            tbl.string('password').notNullable()
            tbl.integer('squad_id')
                .unsigned()
                // .notNullable()
                .references('squad_id')
                .inTable('squads')
                .onDelete('CASCADE')

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('players')
        .dropTableIfExists('squads')
};
