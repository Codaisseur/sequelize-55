## Sequelize

- config => configure for example where is our database
- models => Models of our data (Users, Product, Orders, Categories)

- migrations: instructions to actually build tables from the models.
- seeders: How to input test data to our tables.

### Useful commands

- Generate Models & Migrations

`npx sequelize-cli model:generate --name user --attributes name:string,email:string,phone:integer,password:string`

- Generate Seed files

`npx sequelize-cli seed:generate --name some-users`