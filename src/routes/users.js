const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/users')


router.get('/', ctrl.getUserByName)
// router.get('/:userId', ctrl.getOneUser)
router.post('/', ctrl.createUser)
// router.get('/:userId/tasks', ctrl.getAllTasks)
// router.get('/:userId/tasks/:taskId', ctrl.getOneTask)
// router.post('/:userId/tasks', ctrl.createTask)
// router.put('/:userId/tasks/:taskId', ctrl.updateTask)


// router.use('/teams', require('../routes/teams'))

module.exports = router