// HEre we will have all the routes corresponing to the user model
const { Router } = require("express");
const User = require("../models").user;
const TodoList = require("../models").todoList;

const router = new Router();

// Define routes === endpoints
// GET - localhost:4000/users
router.get("/", async (req, res, next) => {
  try {
    // Somehow get the data from my table
    // .findAll is a model method
    const users = await User.findAll({ include: TodoList }); // gets me all users in the table
    console.log("got a request to send all users");
    // send the users back
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

//GET SPECIFIC USER
router.get("/:userId", async (req, res) => {
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
router.post("/", async (request, response) => {
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
router.patch("/:id", async (req, res, next) => {
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

module.exports = router;
