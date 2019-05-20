const express = require('express');
const router = express.Router();

const Note = require('../models/note');
const User = require('../models/users');

router.get('/notes/:userId', function(req, res){
    Note.find({userId: parseInt(req.params.userId, 10)}).then(function(notes){
        res.send(notes);
    })
   console.log('get');
});

router.get('/note/:noteId', function(req, res){
    Note.find({noteId: parseInt(req.params.noteId, 10)}).then(function(note){
        res.send(note);
    })
   console.log('get');
});

router.put('/note', function(req, res){
    console.log(req.body)
    Note.findOneAndUpdate({noteId: parseInt(req.body.noteId, 10)},{ $set: {name:req.body.name, content: req.body.content} },
        {
            returnNewDocument: true
        } ).then(function(err, note){
            console.log(note);
        res.send({message: 'note updated successfully'});
    });
});

router.post('/notes', function(req, res){
    let obj = {};
    Note.find({}).then((note) => {
        if (parseInt(Math.max.apply(Math, note.map((o) => o.noteId))) + 1){
            obj.noteId = parseInt(Math.max.apply(Math, note.map((o) => o.noteId)) + 1);
        } else {
            obj.noteId = 1;
        }
        
        obj = {...obj, ...req.body}
        Note.create(obj).then(() => {
            res.send({message: 'Note created successfully'});
        });
    });
    
});

router.delete('/note/:id', function(req, res){
    Note.find({noteId: req.params.id}).remove().then(function(){
        res.send({message: 'note deleted successfully'});
    });
    
});

module.exports = router;