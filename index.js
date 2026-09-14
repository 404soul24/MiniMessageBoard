const express = require('express');
const path = require("node:path");

const app = express();
const PORT = 3000;
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { messages: messages});
});
app.get("/new", (req, res) => {
  res.render("form");
});
app.get("/messages/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) return res.status(404).send("Message not found");
  res.render("message", { message });
});


app.post("/new", (req,res) => {
    const body = req.body;
    messages.push({ text: body.message, user: body.author, added: new Date() });
    res.redirect("/");
})


if (require.main === module) {
  app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
}

module.exports = app;