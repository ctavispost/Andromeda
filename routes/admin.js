const express = require('express');
const db = require('../models')
const router = express.Router();

app.get('/', (req, res) => {
    res.render('admin');
});