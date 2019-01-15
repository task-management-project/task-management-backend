const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/users')
const auth = require('../controllers/auth')

//create a user
router.post('/users', ctrl.createUser)
//get a user
router.get('/users/:userId', auth.authenticated, auth.isSelf, ctrl.getOneUser)
//get all task for a user
router.get('/users/:userId/tasks', auth.authenticated, auth.isSelf, ctrl.getAllTasks)
//get one task for a user
router.get('/users/:userId/tasks/:taskId', auth.authenticated, auth.isSelf, ctrl.getOneTask)
//create a task
router.post('/users/:userId/tasks', auth.authenticated, auth.isSelf, ctrl.createTask)
//update a task
router.put('/users/:userId/tasks/:taskId', auth.authenticated, auth.isSelf, ctrl.updateTask)
//get a user by username
router.get('/users/:userId/member', auth.authenticated, auth.isSelf, ctrl.getUserByName)
//create a team (and become a manager)
router.post('/users/:userId/team', auth.authenticated, auth.isSelf, ctrl.createTeam)
//manger - view all users with tasks for team
//router.get('/users/:userId/teams/:teamId', auth.authenticated, auth.isSelf, ctrl.getAllMembersAndTasks)


module.exports = router 