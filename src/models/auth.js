const bcrypt = require('bcrypt')
const users = require('./users')
const knex = require('../../db/index')

const login = (username, password) => {
  let user
  return users.getUserByName(username)
    .then(data => {
      if (!data) throw { status: 400, message: 'Bad Request!' }
      user = data
      return bcrypt.compare(password, data.hashword)
    })
    .then(status => {
      if (!status) throw { status: 401, message: 'Unauthorized!!' }
      delete user.password
      return user
    })
}

const getUser = userId => {
  return knex('team_membership')
    .where({'team_membership.user_id': userId})
}

module.exports = { login, getUser }
