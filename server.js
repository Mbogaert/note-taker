const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const fs = require('fs');
const path = require('path');
// for the middlewear:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = require('./Develop/db/db.json');
console.log("db: ", db);

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
};

// Maybe add valiation later (module 11.2.6)

// GET /notes should return the notes.html file

// GET * should return the index.html file

// GET /api/notes should read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    res.json(db);
});

// POST /api/notes should receive a new note ans save to req.body
// then add it to the db.json file, then return the new note to the client
app.post('/api/notes', (req, res) => {
    // creates an id based on the length of the array for each new note - will need to change later
    req.body.id = db.length.toString();
    // add notes to json file
    const note = createNewNote(req.body, db);
    res.json(note);
});

app.listen(PORT, () => {
    console.log(`Note Taker Server now on port ${PORT}!`);
});