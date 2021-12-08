// import tools
const express = require("express");
const PORT = 4000;

//importing models
const User = require("./models").user;
const TodoList = require("./models").todoList;

// Create server
const app = express();

// Parse the body
app.use(express.json());

// Define routes === endpoints
// GET - localhost:4000/users
app.get("/users", async (request, response) => {
  try {
    // Somehow get the data from my table
    // .findAll is a model method
    const users = await User.findAll({ include: TodoList }); // gets me all users in the table
    console.log("got a request to send all users");
    // send the users back
    response.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

//GET SPECIFIC USER
app.get("/users/:userId", async (req, res) => {
  try {
    const id = parseInt(req.params.userId);
    const user = await User.findByPk(id, { include: TodoList });

    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (e) {
    console.log(e.message);
  }
});

//POST a user
//http syntax: http :4000/users name=Karla email=karla@karla.com password=karla phone=12345678
app.post("/users", async (request, response) => {
  try {
    const { name, email, password, phone } = request.body;

    // if (!name || !email || !password) {
    //   response.send("Missing parameters")
    // }

    const user = await User.create({ name, email, password, phone });
    response.send(user);
  } catch (e) {
    console.log(e.message);
  }
});

//http syntax: http PATCH :4000/users name=Boo
app.patch("/users/:id", async (req, res, next) => {
  try {
    // find this user
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("This user doesn't exist");
    }

    const newName = req.body.name;

    await user.update({ name: newName });

    res.send(user);
  } catch (e) {
    next(e);
  }
});

// Start server
app.listen(PORT, () => console.log("Running in port 4000"));
