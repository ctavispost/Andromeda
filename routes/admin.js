const express = require('express');
const db = require('../models')
const router = express.Router();

router.get('/', (req, res) => {
    db.user.findAll().then((user) => {
        res.render('admin', {user: user});


    }).catch((error) => {
        console.log("can't get users")
    })
    
});

module.exports = router;