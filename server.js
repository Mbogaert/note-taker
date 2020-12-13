const express = require('express');
const apiRoutes = require('./Develop/public/routes/apiRoutes');
const htmlRoutes = require('./Develop/public/routes/htmlRoutes');
const PORT = process.env.PORT || 3002;
const app = express();

// for the middlewear:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Maybe add valiation later (module 11.2.6)

app.listen(PORT, () => {
    console.log(`Note Taker Server now on port ${PORT}!`);
});