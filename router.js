"use strict"; {
    const express = require('express');
    const router = express.Router();

    router.get('/', function(req,res){
        res.send([
                {id:1, product:'Apple', price: 1.50, quantity:1},
                {id:2, product:'Bananna', price: 3.00, quantity:3},
                {id:3, product:'Pineapples', price: 2.75, quantity:5}
        ]);
    });

    router.post('/', function(req,res){
        if(req.body){
            res.status(201).send(`${req.body}`);
        } else {
            res.sendStatus(400);
        }
    });

    router.put('/:id', function(req,res){
        res.send(console.log(`ID param is: ${req.params.id}`, `${req.body}`));
    });

    router.delete('/:id', function(req,res){
        res.send(console.log(`${req.params.id}`));
    });

    module.exports = router;
}