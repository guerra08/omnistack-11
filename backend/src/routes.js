const express = require('express')
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')
const sessionController = require('./controllers/SessionController')

const router = express.Router()

router.post('/sessions', sessionController.create)

//Ong routes
router.post('/ongs', ongController.create)
router.get('/ongs', ongController.index)

//Incident routes
router.post('/incidents', incidentController.create)
router.get('/incidents', incidentController.index)
router.delete('/incidents/:id', incidentController.delete)

//OngProfile routes
router.get('/profile', profileController.index)

module.exports = router