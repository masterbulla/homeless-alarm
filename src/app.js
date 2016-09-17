const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const mongoose = require('mongoose')
const debug = require('debug')('homeless-alarm:server')
require('dotenv').config()

const uri = process.env.MONGODB_URI
mongoose.connect(uri)

const db = mongoose.connection
db.on('error', (error) => {
  debug(`connection error: ${error}`)
})
db.once('open', () => {
  debug('mongolab connection opened')
})

// see: https://github.com/passport/express-4.x-twitter-example
passport.use(new Strategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackUrl: process.env.TWITTER_CALLBACK_URL,
  },
  (token, tokenSecret, profile, callback) => (callback(null, profile))
))

passport.serializeUser((user, callback) => (callback(null, user)))

passport.deserializeUser((obj, callback) => (callback(null, obj)))

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '../node_modules')))

app.use(require('express-session')({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())

const routes = require('./routes/index')
const profile = require('./routes/profile')
const featureToggles = require('./routes/feature-toggles')
const login = require('./routes/login')
const logout = require('./routes/logout')
const weather = require('./routes/weather')

app.use('/', routes)
app.use('/profile', profile)
app.use('/v1/feature-toggles', featureToggles)
app.use('/login', login)
app.use('/logout', logout)
app.use('/v1/weather', weather)

// todo: move into separate files
app.get('/auth/twitter', passport.authenticate('twitter'))

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/')
  })
// /todo: move into separate files

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()
app.get('/status', ensureLoggedIn, require('express-status-monitor')())
app.use(require('express-favicon-short-circuit'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers w/ stacktraces in development
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {},
  })
})

module.exports = app
