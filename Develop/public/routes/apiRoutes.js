
const router = require('express').Router();
const db = require('../../db/db.json');
const fs = require('fs');

// GET /api/notes should read the db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    console.log(db);
    res.json(db);
});

// POST /api/notes should receive a new note ans save to req.body
// then add it to the db.json file, then return the new note to the client
router.post('/notes', (req, res) => {
    // creates an id based on the length of the array for each new note - will need to change later
    req.body.id = db.length.toString();
    // add notes to json file
    const note = req.body;

    // read the notes...
    let notes = JSON.parse(fs.readFileSync("./Develop/db/db.json", "UTF-8"));
    notes.push(note);

    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notes));
    console.log(notes)
    res.json(notes);
});

module.exports = router;