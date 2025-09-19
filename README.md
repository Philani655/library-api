[README.md](https://github.com/user-attachments/files/22427102/README.md)# RESTful API for managing a library system
RESTful API for managing a library system with two resources: Authors and Books (each book belongs to an author)

## Features
#### This API supports the following CRUD operations on library:
- Add new titles and authors.
- Search books by title, author, or year.
- Correct/update book details. 
- Delete historical records.

#### Authors and Books Endpoints:
- Create New Author
    Endpoint: POST /authors
- List All Authors
    Endpoint: GET /authors
- Get Author By ID
    Endpoint: GET /authors/:id 
- Update Author
    Endpoint: PUT /authors/:id 
- Delete Author
    Endpoint: DELETE /authors/:id 
- List Books By an Author
    Endpoint: GET /authors/:id/books
- Create New Book
    Endpoint: POST /books
- List All Books
    Endpoint: GET /books
- Get Book By ID
    Endpoint: GET /books/:id 
- Update Book
    Endpoint: PUT /books/:id 
- Delete Book
    Endpoint: DELETE /books/:id 
- Middleware
    Logger: logs method & URL
    Input validation middleware
- Error Handling
    Invalid Data
    Not Found
    Conflict (duplicate book)

## Prerequisites

-  Node.js installed on your machine.
- A tool for making API requests, such as [Postman](https://www.postman.com/)


## How to use
1. Clone the repo
``` bash
git clone https://github.com/Philani655/library-api.git
```

2. Install dependencies
``` bash
npm install
```

3. Start the dev server
``` bash
npm run dev
```

- The server will be running on `http://localhost:3000`. You can now use your API client to send requests.


## 🙇 Author
### Philani Vundla
Github: https://github.com/Philani655
        

  
