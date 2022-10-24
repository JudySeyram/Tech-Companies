const mongoose = require('mongoose');


require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server Started at 8000`)
})
app.use('/api', routes)