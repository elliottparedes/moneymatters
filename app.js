const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const markdown = require('marked')
const app = express()
const sanitizeHTML = require("sanitize-html")
const router = require('./router')


let sessionOptions = session({
    secret: "JavaScript is life",
    store: new MongoStore({client: require('./db')}),
    resave: false, 
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 *24, httpOnly: true}
})

app.use(sessionOptions)
app.use(flash())

app.use(function(req,res, next){

    // make all error and success flash messages available from all templates
    res.locals.errors = req.flash("errors")
    res.locals.success = req.flash("success")

    

    next()
})



app.use(express.urlencoded({extended: false}))
app.use(express.json())   // this allows us to access html and use json from express

app.use(express.static('public'))
app.set('views','views')  // shows express where to look for our template
app.set('view engine', 'ejs')

app.use('/', router)




module.exports = app