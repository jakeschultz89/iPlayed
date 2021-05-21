const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');

const db = require('../models');

router.post('/', (req, res) => {
    db.game.create({
      reviewBody: req.body.reviewBody,
      score: req.body.score
    })
    .then((post) => {
      res.redirect('/')
    })
    .catch((error) => {
      res.status(400).render('main/404')
    })
  })

module.exports = router;

    