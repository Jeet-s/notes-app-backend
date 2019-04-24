const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    content: {
        type: String,
    },
    noteId : {
        type: Number,
        required: [true, 'note id is required']
    },
    userId: {
        type: Number,
        required: [true, 'user id is required']
    }
});

const UserSchema = new Schema({
    userId: {
        type: Number,
        required: [true, 'user id is required']
    },
    userName: {
        type: String,
        required: [true, 'user name is required']
    },
    email: {
        type: String,
        required: [true, 'user email is required']
    },
    password: {
        type: String,
        required: [true, 'user password is required']
    },
});

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;