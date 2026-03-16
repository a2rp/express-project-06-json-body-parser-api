# express-project-06-json-body-parser-api

A simple Express.js backend API demonstrating how to accept and process JSON request bodies using the Express JSON body parser middleware.

---

## Project Goal

This project demonstrates how backend APIs receive JSON data from clients using POST requests and how Express parses that data using built-in middleware.

Key learning points:

- Express server setup
- JSON body parsing using `express.json()`
- POST request handling
- Basic controller and route structure
- Using nodemon for development

---

## Tech Stack

- Node.js
- Express.js
- Nodemon

---

## Project Structure

```
express-project-06-json-body-parser-api
│
├── src
│   ├── controllers
│   │   └── user.controller.js
│   │
│   └── routes
│       └── user.route.js
│
├── api-test.rest
├── index.js
├── package.json
└── .gitignore
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/a2rp/express-project-06-json-body-parser-api.git
cd express-project-06-json-body-parser-api
```

Install dependencies

```bash
npm install
```

---

## Run the Project

Development mode using nodemon

```bash
npm run dev
```

Server runs at

```
http://localhost:1198
```

---

## API Endpoints

### Root Route

```
GET /
```

Response

```json
{
    "message": "JSON Body Parser API is running"
}
```

---

### Create User

```
POST /users
```

Request Body

```json
{
    "name": "Ashish",
    "age": 28,
    "city": "Bangalore"
}
```

Response

```json
{
    "message": "User created successfully",
    "receivedData": {
        "name": "Ashish",
        "age": 28,
        "city": "Bangalore"
    }
}
```

---

## Key Concept

The main concept demonstrated in this project is the JSON body parser middleware.

```
app.use(express.json())
```

This middleware allows Express to read JSON request bodies and make them available through:

```
req.body
```

Without this middleware, Express cannot read JSON request payloads.

---

## API Testing

Requests can be tested using the included REST client file:

```
api-test.rest
```

Supported tools:

- VS Code REST Client
- Thunder Client
- Postman
- curl

---

## Learning Outcome

By completing this project you understand:

- How APIs accept JSON data
- How Express parses request bodies
- How to structure routes and controllers
- How POST APIs work in backend systems

---

## Author

Ashish Ranjan

---

Follow me

- GitHub https://github.com/a2rp
- Portfolio https://www.ashishranjan.net
- LinkedIn https://www.linkedin.com/in/aashishranjan
- Facebook https://www.facebook.com/theash.ashish/
