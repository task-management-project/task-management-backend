const userModel = require('../models/users')

function getOneUser(req, res, next){
  userModel.getOneUser(req.params.userId)
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function getUserByName(req, res, next){
  userModel.getUserByName(req.body.username)
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function createUser(req, res, next){
  if(!req.body.username && !req.body.password){
    return next({ status: 400, message: 'Bad Request'})
  }
  userModel.createUser(req.body.username, req.body.password, req.body.position)
    .then(function(data){
      return res.status(201).send({ data })
    })
    .catch(next)
}

function getAllTasks(req, res, next){
  userModel.getAllTasks(req.params.userId)
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function getOneTask(req, res, next){
  userModel.getOneTask(req.params.userId, req.params.taskId)
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function createTask(req, res, next){
  if(!req.body.name && !req.body.description){
    return next({ status: 400, message: 'Bad Request'})
  }
  userModel.createTask(req.params.userId, req.body.name, req.body.description)
    .then(function(data){
      return res.status(201).send({ data })
    })
    .catch(next)
}

function updateTask(req, res, next){
  userModel.updateTask(req.params.taskId, req.body.name, req.body.description, req.body.thoughts, req.body.isFocus, req.body.isComplete)
    .then(function(data){
      return res.status(201).send({ data })
    })
    .catch(next)
}

function createTeam(req, res, next){
  if(!req.body.name && !req.body.description){
    return next({ status: 400, message: 'Bad Request'})
  }
  userModel.createTeam(req.params.userId, req.body.name, req.body.description)
    .then(function(data){
      return res.status(201).send({ data })
    })
    .catch(next)
}

function getAllMembersAndTasks(req, res, next){
  userModel.getUsersInTeam(req.params.teamId)
    .then(users => {
      const userIds = users.map(user => user.id)
      userModel.getTasksForUsers(userIds)
        .then(function(data){
          return res.status(201).send({ data })
        })
        .catch(next)
    })
}

async function addUserToTeam(req, res, next){
  try {
    const teamId = req.params.teamId
    const user = await userModel.getUserByName(req.body.username)
    const teamsUserIsIn = await userModel.getTeamsForUser(user.id)
    if (teamsUserIsIn.includes(teamId)) {
      return next({ status: 400, message: 'User is already in a team'})
    } 
    const data = await userModel.addUserToTeam(user.id, teamId)
    return res.status(201).send({ data })
  } catch (err) {
    return next({ status: 400, message: err})
  }
}

async function removeUserFromTeam(req, res, next){
  try {
    const teamId = req.params.teamId
    const user = await userModel.getUserByName(req.body.username)
    const teamsUserIsIn = await userModel.getTeamsForUser(user.id)
    if (!teamsUserIsIn.includes(teamId)) {
      return next({ status: 400, message: 'User is already not in a team'})
    }
    const data = await userModel.removeUserFromTeam(user.id, teamId)
    return res.status(201).send({ data })
  } catch (err) {
    return next({ status: 400, message: err})
  }
}

module.exports = {
  getOneUser,
  getUserByName,
  createUser,
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  createTeam,
  getAllMembersAndTasks,
  addUserToTeam,
  removeUserFromTeam
}
  