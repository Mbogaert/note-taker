
const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const { v4: uuidV4 } = require("uuid");

// GET /api/notes should read the db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    console.log(db);
    res.json(db);
});

// POST /api/notes should receive a new note and save to req.body
// then add it to the db.json file, then return the new note to the client
router.post('/notes', (req, res) => {
    // creates an id based on the length of the array for each new note
    req.body.id = uuidV4();
    const note = req.body;
    db.push(note);

    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    console.log("Added to notes: ", db);
    res.json(db);
});

module.exports = router;