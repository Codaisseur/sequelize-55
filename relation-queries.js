const User = require("./models").user
const TodoList = require("./models").todoList

const getTodoLists = async () => {
  const lists = await TodoList.findAll({raw: true, include: User})
  console.log(lists)
  return lists
}

getTodoLists()