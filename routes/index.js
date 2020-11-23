const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../models')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
});