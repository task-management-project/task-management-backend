const knex = require('../../db/index')
const bcrypt = require('bcrypt')

function getAllTasks(userId){
  return knex('tasks')
    .where({'user_id' : userId})
    .then()
}

function getOneUser(userId){
  return (
    knex('users')
      .where({ "id":userId })
      .returning('*')
  )
}

function getUserByName(username){
  return (
    knex('users')
      .where({ "username":username })
      .first()
  )
}

function createUser(username, password, position){
  return getUserByName(username)
    .then(function(data){
      if(data) throw { status: 400, message:'User already exists'}
      return bcrypt.hash(password, 10)
    })
    .then(function(password){
      return (
        knex('users')
          .insert({ username, hashword: password, position })
          .returning('*')
      )
    })
    .then(function([ data ]){
      delete data.hashword
      return data
    })
}

module.exports = {
  getOneUser,
  getUserByName,
  createUser,
  getAllTasks
}
  