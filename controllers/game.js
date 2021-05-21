const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const { Op } = require("sequelize");

const db = require('../models');
const { route } = require('./auth');

router.get('/new', (req, res) => {
    res.render('games/new');
});

router.get('/', async (req, res)=> {
  try {
    const foundGames = await db.game.findAll()
    console.log(foundGames)
    res.render('games/index', {allGames: foundGames.length ? foundGames: []});
} catch (error) {
    console.log(error)
}
  // res.send("allGames")
  
})

router.post('/', (req, res) => {
    db.game.findOrCreate({
      where: {name: req.body.name},
      defaults: {first_release_date: req.body.first_release_date,
        platforms: req.body.platforms,
        userId: req.body.userId}
    })

    .then(([post, created]) => {
      res.redirect('/')
      console.log(post)
      console.log(created)
    })
    .catch((error) => {
      console.log(error)
      res.status(400).render('main/404')
    })
  })

router.get('/:idx', async  (req,res)=>{
    const targetId = req.params.idx
    const foundGame= await db.game.findByPk(targetId)
    console.log(foundGame)
    res.render('games/details', {game:foundGame})
    })


router.delete('/:idx', (req,res) =>{
    db.game.destroy({where: {
         id: req.params.idx
       }})
       .then(deletedGame=>{
         res.redirect('/game')
       })
     })
module.exports = router;

