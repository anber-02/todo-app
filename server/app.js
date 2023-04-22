import express from "express";
import cors from 'cors'
import { 
  getTodoById,
  createTodo,
  getTodo,
  getUserByEmail,
  getSharedTodoById,
  getTodosById,
  shareTodo,
  deleteTodo,
  toggleCompleted,
  getUserById,
} from "./database.js";

// const corsOptions = {
//   origin: "http://127.0.0.1:3000",
//   methods: ["POST", "GET"],
//   credentials: true
// }

const app = express()
app.use(express.json())
// app.use(cors(corsOptions))
app.use(cors())


app.get("/todos/:id", async (req, res) => {
  const todos = await getTodosById(req.params.id);
  console.log({todos})
  res.status(200).send(todos);
});

app.get("/todos/shared_todos/:id", async (req, res) => {
  try{
    const todo = await getSharedTodoById(req.params.id);
    const author = await getUserById(todo.user_id);
    const shared_with = await getUserById(todo.shared_with_id);
    console.log(shared_with)
    res.status(200).send({ author, shared_with });
  }catch(e){
    console.log(e)
  }
});

app.get("/users/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  res.status(200).send(user);
});

app.put("/todos/:id", async (req, res) => {
  const { value } = req.body;
  const todo = await toggleCompleted(req.params.id, value);
  res.status(200).send(todo);
});

app.delete("/todos/:id", async (req, res) => {
  await deleteTodo(req.params.id);
  res.send({ message: "Todo deleted successfully" });
});

app.post("/todos/shared_todos", async (req, res) => {
  const { todo_id, user_id, email } = req.body;
  // const { todo_id, user_id, shared_with_id } = req.body;
  const userToShare = await getUserByEmail(email);
  const sharedTodo = await shareTodo(todo_id, user_id, userToShare.id);
  res.status(201).send(sharedTodo);
});

// app.get("/todos/:id", async (req, res) => {
//   const id = req.params.id;
//   const todo = await getTodo(id);
//   res.status(200).send(todo);
// });

app.post("/todos", async (req, res) => {
  const { user_id, title } = req.body;
  const todo = await createTodo(user_id, title);
  res.status(201).send(todo);
});


app.listen(3000, () => {
  console.log(`Server working in 3000 port`)
})                                                                                                                                                                                                             