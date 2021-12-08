// import tools
const express = require("express");
const PORT = 4000;

// importing the routers
const userRouter = require("./routers/user");

// Create server
const app = express();

// Middlewares
app.use(express.json()); // Parse the body

// Routers
app.use("/users", userRouter);
// app.use("/lists", listRouter); // not defined
// app.use("/auth", authRouter); // login, signup, etc.

// Start server
app.listen(PORT, () => console.log("Running in port 4000"));
