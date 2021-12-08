const express = require("express");
const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;
const PORT = 4000;

// create the app (server)
const app = express();

const logginMiddleware = (request, response, next) => {
  console.log("I got a request!", request.method, new Date());
  next();
};

// register some middlewares (tools)
// we need it to be able to read the body of the request.

// Middlewares at app level
app.use(express.json()); // body-parser
app.use(logginMiddleware); // middleware at app level

// register some routes
// CRUD
// Create Read Update    Delete
// POST   GET   PATCH/PUT  DELETE
app.post("/signup", async (request, response, next) => {
  try {
    // { name, email, password } => request.body
    const { name, email, password } = request.body;
    console.log(request.body);

    if (!password || !name || !email) {
      // no password
      return response.status(400).send("Missing parameters to create a user");
    } else {
      // we have the data
      // let's create the user!
      const user = await User.create({
        name: name,
        email,
        password: password,
      }); // inserting into the DB a new user (hopefully)

      console.log(user);
      response.send({ message: "user created!", user });
    }
  } catch (e) {
    next(e); // error handling
  }
});

// authorization
const authorization = (request, response, next) => {
  const fail = Math.random() * 10;
  if (fail > 5) {
    console.log("You failed");
    response.status(401).send("You didn't pass the test, cant see the data");
  } else {
    console.log("Welcome you passed the test!");
    next();
  }
};

// get me a user, his lists and the items in those lists
app.get(
  "/users/:userId/lists",
  authorization, // placing middlewares at ROUTE level.
  async (req, res, next) => {
    try {
      // Get the params (userId) from the request
      const userId = req.params.userId;
      // Try to find this user
      const user = await User.findByPk(userId, {
        include: [{ model: TodoList, include: [{ model: TodoItem }] }],
      });
      console.log(user);
      res.send(user);
    } catch (e) {
      next(e);
    }
  }
);

// start the server
app.listen(PORT, () => console.log("im running..."));
