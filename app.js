const express = require('express');
const notes_routes = require('./routes/notes-api');
const users_routes = require('./routes/user-api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost/notesdb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', notes_routes);
app.use('/api', users_routes);

app.listen(4400, function(){
    console.log('listening to port 4000 for requests');
});