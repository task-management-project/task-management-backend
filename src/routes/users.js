const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/users')
const auth = require('../controllers/auth')

router.get('/users', auth.authenticated, auth.isSelf, ctrl.getUserByName)
router.get('/users/:userId', auth.authenticated, auth.isSelf, ctrl.getOneUser)
router.post('/users', ctrl.createUser)
router.get('/users/:userId/tasks', auth.authenticated, auth.isSelf, ctrl.getAllTasks)
router.get('/users/:userId/tasks/:taskId', auth.authenticated, auth.isSelf, ctrl.getOneTask)
router.post('/users/:userId/tasks', auth.authenticated, auth.isSelf, ctrl.createTask)
router.put('/users/:userId/tasks/:taskId', auth.authenticated, auth.isSelf, ctrl.updateTask)


module.exports = router 