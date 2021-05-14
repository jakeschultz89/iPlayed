const db = require('./models');

db.user.findOne({
    where: { email: 'john@gmail.com' }
})
.then(userData => {
    // name, email
})