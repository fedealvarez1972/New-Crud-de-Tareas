const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    dialectOptions:{ssl:{require: true, rejectUnauthorized: false}},
});

module.exports = db;

//postgres://new_crud_de_tareas_user:9pjoTKifeMm5hpYvEmoIWD89VOakEw89@dpg-cilj4penqqlfm4c8bgig-a.oregon-postgres.render.com/new_crud_de_tareas

//******host: @dpg-cilj4penqqlfm4c8bgig-a.oregon-postgres.render.com*******//