const fs = require('fs')

const dataParser = require('./helper/dataParser')
const generateId = require('./helper/generateId')

function registerUser(name, email, password, callback) {
    fs.readFile('./users.csv', function (error, data) {
        if (error) {
            callback(error)

            return
        }

        const users = dataParser(data)

        const userExist = users.find(function (user) {
            return user.email === email
        })

        if (userExist) {
            callback(new Error('User already exist'))

            return
        }

        const id = generateId()

        const usersString = data.toString() + '\n' + id + ', ' + name + ', ' + email + ', ' + password

        fs.writeFile('./users.csv', usersString, function (error) {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}

module.exports = registerUser