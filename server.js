// import the express library... require basically means import
const express = require('express')
// import path... path connects pieces of locations
const path = require('path')
const bodyParser = require('body-parser')  // import this for POST requests


const indexRouter = require('./routes/index.js')

const app = express()     //creates the web app server

// enable parsing of POST request body
app.use(bodyParser.urlencoded({extended: false}))

// use this block of code to connect to css stylesheet
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// tell app where the views (HTML files or templates) are
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') // use handlebars to generate views

app.use('/', indexRouter) // all requests to the app will be passed to indexRouter

// start server running
const server = app.listen(process.env.PORT || 3000, function(){
    console.log('Server running on port', server.address().port)
})
