const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/users')
const auth = require('../controllers/auth')

router.get('/users', ctrl.getUserByName)
// router.get('/users/:userId', ctrl.getOneUser)
router.post('/users', ctrl.createUser)
// router.get('/users/:userId/tasks', ctrl.getAllTasks)
// router.post('/users/:userId/tasks', ctrl.createTask)
// router.put('/users/:userId/tasks/:taskId', ctrl.updateTask)


module.exports = router