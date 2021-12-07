### Why add relations ?

- Avoid repetition
- Separations of concerns
- Security
- Get only relevant data

### Types of relation

**One to One**:

- citizen hasOne BSN
- BSN belongsTo citizen

citzen <-> BSN
person <-> ID
user <-> token per Session

**One to Many**:

- person hasMany toothbrushes
- toothbrushed belongsTo person

person <-> underwear
person <-> email
person <-> computers
person <-> glasses
biological mother <-> kids
author <-> books

**Many to Many**:

- student hasMany classes
- classes hasMany students

students <-> classes
person <-> siblings
customer <-> products
worker <-> project

### Steps to add relation

**Step 0:** Undo all your migrations and add the Foreign key to the seeds

`npx sequelize-cli db:migrate:undo:all`

**Step 1:** Generate a new file to add the relation

`npx sequelize-cli migration:generate --name set-up-relations`

**Step 2:** Modify that file to describe the relation

```js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId");
  },
};
```

**Step 3:** Migrate and check Postico/DBeaver

`npx sequelize-cli db:migrate`

**Step 4:** Write the relations in the models

**Step 5:** Write queries to test