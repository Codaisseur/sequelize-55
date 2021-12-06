const User = require("./models").user;

const getAllUsers = async () => {
  try {
    const users = await User.findAll({
      raw: true,
    });
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllUsers();

const getOneUser = async (id) => {
  try {
    const userId = id;
    const oneUser = await User.findByPk(userId);
    console.log(oneUser);
  } catch (e) {
    console.log(e.message);
  }
};

//getOneUser(3);

const findUserByEmail = async (userEmail) => {
  try {
    const users = await User.findAll({
      where: { email: userEmail },
    });
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};
// findUserByEmail("leo@messi.com");

const createNewUser = async (username, useremail, userpassword) => {
  try {
    const newUser = await User.create({
      name: username,
      email: useremail,
      password: userpassword,
    });
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};

createNewUser("Matias", "m@m.com", "1234");
