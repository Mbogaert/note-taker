const express = require('express');
const app = express();
const { db } = require('./Develop/db/db');

// GET /notes should return the notes.html file

// GET * should return the index.html file

// GET /api/notes should read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    res.send('Testing!');
});

// POST /api/notes should receive a new note ans save to req.body
// then add it 

app.listen(3002, () => {
    console.log('Note Taker Server now on port 3002!');
});