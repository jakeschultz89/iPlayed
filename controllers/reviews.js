
/*
boiler plate for express router
set up routes for GET, POST, PUT, DELETE routes


review/new should display template for writing a review

router.post('/', (req, res)=>{
this is where my testDb code for writing review would go
})
*/

const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');

const db = require('../models');

// .post('/', async (req,res)=>{
//     try {
//         const foundUser = await db.user.findByPk(req.body.userId)
//         const newAdventure = await foundUser.createAdventure(req.body)
//         // flash for creating updating ui
//         res.redirect('/adventure')
//     } catch (error) {
//         console.log(error)
//         res.redirect('/adventure/new')
//     }
// })