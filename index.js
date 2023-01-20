const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES
// Create a todo
app.post("/todo", async(req,res) =>{
  try {
    const{description} = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description]
  );
    res.json(newTodo.rows[0]);
    // console.log(req, body);
  } catch (err) {
    console.error(err.message);
  }
});
// get all todos
app.get("/todo", async(req, res)=>{
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);

});
// get a todo
app.get("todo/:id", async(req, res) =>{
  try {
    // console.log(req.params);
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// update a todo
app.put("todo/:id", async(req, res) =>{
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
  } catch (err) {
    console.error(err.message);

  }
});
// delete a todo
app.delete("/todo/:id", async(req, res) =>{
  try {
    const{id} = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted!");
  } catch (err) {
  console.log(err.message);
  }
});

app.listen(5000, ()=>{
  console.log("server has started on port 5000");
  });
