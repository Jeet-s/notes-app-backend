const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.get('/user/:id', function(req, res){
    User.find({userId: req.params.id}).then(function(users){
        res.send(users);
    })
});

router.put('/user/:id', function(req, res){
    User.findOneAndUpdate({userId: req.body.userId}, req.body).then(function(){
        res.send({message: 'user updated successfully'});
    });
});

router.post('/register', function(req, res){
    let obj = {};
    User.find({}).then((user) => {
        console.log(user)
        obj.userId = Math.max.apply(Math, user.map((o) => o.userId)) + 1;
        obj = {...obj, ...req.body}
        User.create(obj).then(() => {
            res.send({message: 'user created successfully'});
        });
    });
});

router.post('/login', function(req, res){
    User.find({email: req.body.email, password: req.body.password}).then(function(user){
        if(user.length > 0){
            res.send({message: 'login successful', data: user});
        } else{
            res.send({error: 'incorrect email or password'});
        }
        
    });
});

router.delete('/user/:id', function(req, res){
    User.find({userId: req.params.id}).remove().then(function(){
        res.send({message: 'user deleted successfully'});
    });
    
});

module.exports = router;