const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

const getTodoLists = async () => {
  const lists = await TodoList.findAll({ raw: true, include: User });
  console.log(lists);
  return lists;
};

// getTodoLists()

const getListWithItems = async (id) => {
  try {
    const list = await TodoList.findByPk(id, {
      include: [{ model: TodoItem }],
    });
    console.log(list.todoItems);
  } catch (e) {
    console.log(e.message);
  }
};

getListWithItems(2);
