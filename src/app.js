// Instancia de express
const express = require('express');
// importar la base de datos
const db = require ('./utils/database');
// importar modelo Todos
const Todos = require('./models/todos.model');
require('dotenv').config();

// ejecutamos el modelo todos asi se crea la tabla en postgres
Todos;


// Probar conexion a la base de datos
db.authenticate()
.then(() => {
    console.log('Conectado a la base de datos');
})
.catch(error => console.log(error));

// Sincronizar modelos de la base de datos
db.sync()
.then(() =>{
    console.log('Base de datos sincronizada');
})
.catch(error => console.log(error));


const app = express();

app.use(express.json());





const PORT = process.env.PORT || 8000;


app.get ('/', (req, res) => {
    res.send ('Servidor Funcionando OK, Respondiendo');
});

// Crear un usuario
app.post('/api/v1/todos', async (req, res) => {
    try {
      const {title, description} = req.body;
      await Todos.create({title, description});
      res.status(201).send();
      } catch (error) {
      res.status(400).json(error);   
    }
});

// Obtener todas las tareas
app.get('/api/v1/todos', async (req, res) => {
    try {
      const todos = await Todos.findAll();
      res.json(todos);
    } catch (error) {
      res.status(400).json(error);
    }
  });

// obtener una tarea por su ID
app.get('/api/v1/todos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.params);
      const todos = await Todos.findByPk(id);
      res.json(todos);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // actualizar UPDATE //
// UPDATE todos SET title = "xvalor", description = "xvalor" WHERE id = x //
app.put('/api/v1/todos/:id', async (req,res) =>{
    try {
      const {id} = req.params;
      const { completed } = req.body;
      // actualiza el completed//
      await Todos.update ({ completed }, {
        where: {id},
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  });

// ELIMINAR UNA TAREA //
// DELETE FROM todos WHERE id=3
app.delete('/api/v1/todos/:id', async (req, res) =>{
    try {
      const {id} = req.params;
      await Todos.destroy({
        where: {id}
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  });

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

console.log(process.env);