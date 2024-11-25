const express = require('express')
const router = express.Router() // make a router object. figures out what code to run in response to a request
                                       // based on the URL, and the method, GET, POST, etc.


// req and res in the function are short for request and response
// get request to the home page
// responds to get request to homepage '/'
// basically when the router gets this request, call this function
router.get('/', function(req, res, next){
    // name of handlebars file - name of a template, optional object with data for the template
    res.render('index', {
        title: 'Feedback Application',
        author: 'Michael',
        timePageLoadedAt: new Date()})
})

// render student_feedback template
router.get('/feedback-form', function(req, res,next) {
    res.render('student_feedback_form')
})

// for when the submit button is clicked on feedback form
router.post('/submit-feedback', function(req, res, next) {
    // access form data
    // const formData = req.query // returns an object with form data... for a GET request read the url query
    const formData = req.body // for a POST request
    console.log(formData)

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    })
})

// return this router object to whatever else requires this file
module.exports = router // this line needs to be the very last line