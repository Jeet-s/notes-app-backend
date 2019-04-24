const express = require('express');
const router = express.Router();

const Note = require('../models/note');
const User = require('../models/users');

router.get('/notes/:userId', function(req, res){
    Note.find({userId: req.params.userId}).then(function(notes){
        res.send(notes);
    })
   console.log('get');
});

router.put('/note', function(req, res){
    Note.findOneAndUpdate({noteId: req.body.noteId}, req.body).then(function(){
        res.send({message: 'note updated successfully'});
    });
});

router.post('/notes', function(req, res){
    Note.create(req.body).then((note) => {
        res.send(note);
    });
    
});

router.delete('/note/:id', function(req, res){
    Note.find({noteId: req.params.id}).remove().then(function(){
        res.send({message: 'note deleted successfully'});
    });
    
});

module.exports = router;