const db = require("./models")
async function addNewUser() {
    try {
        const newUser = await db.user.create({
            first_name: "Jake",
            last_name: "Schultz",
            email: "ejacobschultz@gmail.com",
            password: "password123"
        })
        console.log(newUser);
        
    } catch (error) {
        console.log(error)
    }
    
}

// addNewUser() 

async function addNewGame() {
    try {
        const foundUser = await db.user.findByPk(1)
        console.log(foundUser)
        const newGame = await foundUser.createGame({
            name: "Super Mario 64",
            first_release_date: "June 23, 1996",
            platforms: "Nintendo 64"
        })
        console.log(newGame)
    } catch (error) {
        console.log(error)
    }
    
}

// addNewGame()

async function createReview() {
    try {
        const foundUser = await db.user.findByPk(1)
        const newReview = await foundUser.createReview({
            reviewBody: "This game is awesome!",
            score: 100,
        })
    } catch (error) {
        console.log(error)
    }
}

// createReview()

async function assosciateReview() {
    try {
        const foundGame = await db.game.findByPk(1)
        const foundReview = await db.review.findByPk(1)
        const addedReview = await foundGame.addReview(foundReview)
        console.log(addedReview)
    } catch (error) {
        console.log(error)
    }
}

// assosciateReview()