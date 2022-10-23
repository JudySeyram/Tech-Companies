const mongoose = require('mongoose');


require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
const mongoString = "mongodb+srv://Judy:Titus2crete@cluster0.l6mifjm.mongodb.net/test"
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

app.listen(3000, () => {
    console.log(`Server Started at `)
})
app.use('/api', routes)