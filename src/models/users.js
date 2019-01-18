const knex = require('../../db/index')
const bcrypt = require('bcrypt')

function getOneUser(userId){
  return (
    knex('users')
      .where({ "id":userId })
      .returning('*')
  )
}

const getAllUsers = () => knex('users')

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

function deleteTask(userId, taskId){
  return knex('tasks')
    .where({'id' : taskId, 'user_id' : userId})
    .del()
    .returning('*')
}

function createTeam(userId, name, description, team){
  return (
    knex('teams')
      .insert({name: name, description: description})
      .returning('*')
  ) 
    .then(([data]) => {
      return knex('team_membership')
        .insert({user_id: userId, team_id: data.id, is_manager: true})
        .returning('*')
    })
    .then(([data]) => {
      const toInsert = team.map(ele => ({user_id: ele, team_id: data.team_id, is_manager: false}))
      return knex('team_membership')
        .insert(toInsert)
        .returning('*')
    })
}

function getUsersInTeam(teamId){
  return knex('users')
    .join('team_membership', 'user_id', 'users.id')
    .where('team_membership.team_id', teamId)  
}

function getTasksForUsers(userIds){
  return knex('tasks')
    .select('tasks.id', 'name', 'description', 'thoughts', 'isFocus', 'isComplete', 'user_id', 'username', 'position')
    .join('users', 'users.id', 'tasks.user_id')
    .whereIn('user_id', userIds)
}

function getTeamsForUser(userId){
  return knex('teams')
    .join('team_membership', 'team_id', 'teams.id')
    .where('team_membership.user_id', userId)
}

function addUserToTeam(userId, teamId){
  return knex('team_membership')
    .insert({user_id: userId, team_id: teamId})
    .returning('*')
}

function removeUserFromTeam(userId, teamId){
  return knex('team_membership')
    .del()
    .where({user_id: userId, team_id: teamId})
    .returning('*')
}

const getAllMembersAndTasks = (id) => {
  return knex('teams')
          .select('teams.id')
          .innerJoin('team_membership', 'team_membership.team_id', 'teams.id')
          .where('team_membership.user_id', id)
          .then(result => {
            const users = result.map(ele => ele.id)
            return knex('team_membership')
                    .select('users.username', 'tasks.*')
                    .innerJoin('users', 'users.id', 'team_membership.user_id')
                    .innerJoin('teams', 'team_membership.team_id', 'teams.id')
                    .innerJoin('tasks', 'tasks.user_id', 'users.id')
                    .where((builder) => 
                    builder.whereIn('team_membership.team_id', users).andWhere('team_membership.is_manager', 'false')
                    .andWhere('tasks.isFocus', 'true'))
                    .then(result => console.log(result))
          })
}

module.exports = {
  getOneUser,
  getAllUsers,
  getAllMembersAndTasks,
  getUserByName,
  createUser,
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
  createTeam,
  getUsersInTeam,
  getTasksForUsers,
  getTeamsForUser,
  addUserToTeam,
  removeUserFromTeam
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