const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const db = require('./Develop/db/db.json');
console.log("db: ", db);

// GET /notes should return the notes.html file

// GET * should return the index.html file

// GET /api/notes should read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    res.json(db);
});

// POST /api/notes should receive a new note ans save to req.body
// then add it to the db.json file, then return the new note to the client
// need to give each note a unique id when it is saved

app.listen(PORT, () => {
    console.log(`Note Taker Server now on port ${PORT}!`);
});