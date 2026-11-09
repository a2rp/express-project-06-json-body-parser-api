# express-project-06-json-body-parser-api

A small Express.js API that demonstrates parsing and validating JSON request bodies. It returns the submitted sample data and does not save users to a database.

## What it demonstrates

- Parsing JSON with Express `express.json()` middleware
- Handling a `POST /users` request
- Validating fields and returning clear `400 Bad Request` responses
- Separating routes and controllers

## How parsing works

Register the parser before the routes. It reads JSON request bodies and exposes the parsed object as `req.body`:

```js
app.use(express.json());
```

Malformed JSON is handled separately and returns a JSON `400` response.

## Project structure

```text
express-project-06-json-body-parser-api/
├── src/
│   ├── controllers/
│   │   └── user.controller.js
│   └── routes/
│       └── user.route.js
├── .gitignore
├── api-test.rest
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## Requirements and setup

Use Node.js 18 or later. Install dependencies with:

```bash
npm install
```

Start with automatic restarts during development:

```bash
npm run dev
```

Or start the server directly:

```bash
npm start
```

The API listens at `http://localhost:1198`.

## Endpoints

### `GET /`

Returns a simple status message:

```json
{
  "message": "JSON Body Parser API is running"
}
```

### `POST /users`

Send `Content-Type: application/json` and a JSON object with a non-empty `name` and `city` (up to 100 characters each) and an integer `age` from 0 to 120:

```json
{
  "name": "Ashish",
  "age": 28,
  "city": "Bangalore"
}
```

A valid request returns `201 Created`:

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

Invalid or missing fields return `400 Bad Request`. Malformed JSON returns a `400` response with error code `INVALID_JSON`.

Use the included [`api-test.rest`](./api-test.rest) file with the VS Code REST Client, or send the example with curl:

```bash
curl -X POST http://localhost:1198/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ashish","age":28,"city":"Bangalore"}'
```

## Author and links

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- CodePen: https://codepen.io/ash1198
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: ash.ranjan09@gmail.com
- Support: https://a2rp-donation-page.netlify.app/
- Buy Me a Coffee: https://buymeacoffee.com/ashishranjan
- Patreon: https://www.patreon.com/ashishranjan
