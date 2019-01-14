const userModel = require('../models/users')

function getUserByName(req, res, next){
    userModel.getUserByName(req.body.username)
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function createUser(req, res, next){
    if(!req.body.username && !req.body.password && !req.body.position){
      return next({ status: 400, message: 'Bad Request'})
    }
    userModel.createUser(req.body.username, req.body.password, req.body.position)
    .then(function(data){
      return res.status(201).send({ data })
    })
    .catch(next)
  }


module.exports = {
    getUserByName,
    createUser
  }
  