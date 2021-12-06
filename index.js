// import tools
const express = require("express");
const PORT = 4000;
const User = require("./models").user;

// Create server
const app = express();

app.use(express.json());

// Define routes === endpoints
// GET - localhost:4000/users
app.get("/users", async (request, response) => {
  try {
    // Somehow get the data from my table
    // .findAll is a model method
    const users = await User.findAll(); // gets me all users in the table
    console.log("got a request to send all users");
    // send the users back
    response.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
  }
});

app.patch("/users/:id", async (req, res, next) => {
  try {
    // find this user
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("This user doesn't exist");
    }

    console.log(user);
    const newName = req.body.name;

    await user.update({ name: newName });

    res.send(user);
  } catch (e) {
    next(e);
  }
});

// Start server
app.listen(PORT, () => console.log("Running in port 4000"));
