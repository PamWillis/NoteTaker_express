const path = require("path");
const fs = require("fs");
const app = require("express").Router();

//this package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
var uniqid = require("uniqid");

app.get("/notes", async (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

//POST/api/notes - should receive a note to save on the request body, at it to the db.json and return a note to client
app.post("/notes", (req, res) => {
  let db = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  db = JSON.parse(db);
  // res.json(db);
  //create note
  let userNote = {
    title: req.body.title,
    text: req.body.text,
    //create id
    id: uniqid(),
  };

  console.log(userNote);

  //push created note to be added to the db.json file
  db.push(userNote);
  fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db));
  res.json(db);
});

//DELETE "api/notes/:id" should receive query containing id for note to delete.
app.delete("/notes/:id", (req, res) => {
  //reading notes from db.json
  let db = JSON.parse(fs.readFileSync("db/db.json"));
  // removing note with id
  let deleteNotes = db.filter((item) => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync("db/db.json", JSON.stringify(deleteNotes));
  res.json(deleteNotes);
});

module.exports = app;