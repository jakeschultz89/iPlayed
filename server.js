require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const methodOverride = require('method-override');

const SECRET_SESSION = process.env.SECRET_SESSION;

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(methodOverride('_method'));

app.use(session({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}));
app.use(flash()); 

app.use(passport.initialize());
app.use(passport.session()); 

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/auth', require('./controllers/auth'));
app.use('/game', require('./controllers/game'));

app.get('/profile', isLoggedIn, (req, res) => {
  const { id, first_name, last_name, email } = req.user.get(); 
  res.render('profile', { id, first_name, last_name, email });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`ALL YOUR BASE ARE BELONG TO US.`);
});

module.exports = server;
