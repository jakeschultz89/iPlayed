const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');

const db = require('../models');
const { route } = require('./auth');

router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/', async (req, res) => {
    res.send(req.body)
})

module.exports = router;

// .post('/', async (req,res)=>{
//     try {
//         const foundUser = await db.user.findByPk(req.body.userId)
//         const newGame = await foundUser.createGame(req.body)
//         // flash for creating updating ui
//         res.redirect('/game')
//     } catch (error) {
//         console.log(error)
//         res.redirect('/game/new')
//     }
// })