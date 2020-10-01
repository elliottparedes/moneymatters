const express = require('express')
const router = express.Router()


const subscribeController =  require('./controllers/subscribeController')
const contactController = require('./controllers/contactController')

router.get('/', (req,res) => res.render('home'))

router.get('/subscribe', (req,res) => res.render('subscribe'))

router.get('/banking', (req,res) => res.render('banking'))

router.get('/creditCards',(req,res) => res.render('creditCards'))

router.get('/creditScore',(req,res) => res.render('creditScore'))

router.get('/buyingACar',(req,res) => res.render('buyingACar'))

router.get('/buyingAHouse',(req,res) => res.render('buyingAHouse'))

router.get('/insurance',(req,res) => res.render('insurance'))

router.get('/renting',(req,res) => res.render('renting'))

router.get('/saving',(req,res) => res.render('saving'))

router.get('/taxes',(req,res) => res.render('taxes'))

router.get('/aboutUs', (req,res) => res.render('aboutUs'))

router.get('/contactUs', (req,res) => res.render('contactUs'))

router.post('/subscribe', subscribeController.upload)

router.post('/contact', contactController.send)

module.exports = router