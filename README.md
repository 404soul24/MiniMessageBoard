# Mini Messageboard

A basic Express + EJS message board. View messages, post new ones, and open individual message details.

Live: https://minimessageboard-five.vercel.app

## Routes

- `GET /` — list all messages
- `GET /new` — new message form
- `POST /new` — submit form (`author`, `message`), redirects to `/`
- `GET /messages/:id` — message details

## Run locally

```bash
npm install
node index.js
```

Open http://localhost:3000

## Stack

- Express 5
- EJS
- `express.urlencoded({ extended: true })` for form parsing
- Vercel-ready (`module.exports = app`, conditional `app.listen`)
