## REST API `REpresentational State Transfer`


### Clean URLs

- get users  `baseUrl/users`
- get one user `baseUrl/users/:id`
- user emails `baseUrl/users/emails`
- lists for a user `baseUrl/users/:id/lists`

- get products  `baseUrl/products`
- get one products `baseUrl/products/:id`
- lists for a products `baseUrl/products/:id/lists`

### Operations as HTTP methods

- POST `insert data, ex: post picture, sign up, post`
- GET `get data`
- PUT / PATCH `update existing data, ex: changing profile picture, fix comment`
- DELETE `delete data, ex: delete a picture, delete a comment`

### Appropriate use of HTTP status codes

- 200 - 299: Successful responses
- 300 - 399: Redirection messages
- 400 - 499: Client error responses
- 500 - 599: Server error responses


### CRUD (create, read, update and delete) 

- CREATE: post
- READ: get
- UPDATE: put/patch
- DELETE: delete

### Testing out endpoints

- Command line with httpie
- Client with Postman
