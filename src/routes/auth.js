const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/auth')

router.get('/login', ctrl.authenticated, ctrl.status)
router.post('/login', ctrl.login)

module.exports = router