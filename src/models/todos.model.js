const db = require('../utils/database');
//SE IMPORTA LA BASE DE DATOS A DONDE ESTOY CONECTADO.

const {DataTypes} = require('sequelize');
// SE IMPORTA LA INSTANCIA DE DATATYPES DE SEQUELIZE.

const Todos = db.define('todos', {
    // id, title, description, completed // columnas de la tabla TODOS
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    title:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    description:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    completed:{
        // EN TYPE PONGO UN VALOR BOOLEANO PARA QUE ME DE UN RESULTADO TRUE, O FALSE.
        type:DataTypes.BOOLEAN,
        defaultValue: false,
    },

},{
    timestamps:false,
});

module.exports = Todos;
