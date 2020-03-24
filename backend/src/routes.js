const express = require('express')
const ongsController = require('./controllers/OngsController')
const incidentsController = require('./controllers/IncidentsController')
const profileController = require('./controllers/ProfileController')

const router = express.Router()

//Ong routes
router.post('/ongs', ongsController.create)
router.get('/ongs', ongsController.index)

//Incident routes
router.post('/incidents', incidentsController.create)
router.get('/incidents', incidentsController.index)
router.delete('/incidents/:id', incidentsController.delete)

//OngProfile routes
router.get('/profile', profileController.index)

module.exports = router