const knex = require('../../db/index')
const bcrypt = require('bcrypt')

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

function getAllTasks(userId){
  return knex('tasks')
    .where({'user_id' : userId})
    .then()
}

function getOneTask(userId, taskId){
  return knex('tasks')
    .where({'id' : taskId, 'user_id' : userId})
    .then()
}

function createTask(userId, name, description){
  return knex('tasks')
    .insert({ user_id: userId, name: name, description: description })
    .returning('*')
}


function updateTask(taskId, name, description, thoughts, isFocus, isComplete){
  return knex('tasks')
    .where({'id': taskId})
    .then(([data]) => {
      if (!data) throw {status: 400, message: "task doesn't exist"}
      return knex('tasks')
        .update({ name: name, description:description, thoughts:thoughts, isFocus:isFocus, isComplete:isComplete })
        .where({'id': taskId})
        .returning('*')
    })
}

// * If tasks are connected wich teams
// function createTask(userId, name, description, team_name){
//   if(team_name){
//     return getTeamByName(team_name)
//       .then(data => {
//         return (
//           knex('tasks')
//             .insert({ user_id: userId, team_id: data.id, name: name, description: description})
//             .returning('*')
//         )
//       })
//   } 
//   return autoGenerateTeam(userId, name, description)
//     .then(data => {
//       return (
//         knex('tasks')
//           .insert({ user_id: userId, team_id: data.id, name: name, description: description})
//           .returning('*')
//       )
//     })
// }
// function autoGenerateTeam(userId, name, description){
//   return (
//     knex('teams')
//       .insert({name: name, description: description})
//       .returning('*')
//   ) 
//     .then(([data]) => {
//       return knex('team_membership')
//         .insert({user_id: userId, team_id: data.id, is_manager: true})
//         .returning('*')
//     })  
// }

module.exports = {
  getOneUser,
  getUserByName,
  createUser,
  getAllTasks,
  getOneTask,
  createTask,
  updateTask
}
  