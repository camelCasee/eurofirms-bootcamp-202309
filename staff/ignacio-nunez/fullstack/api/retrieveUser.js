const fs = require('fs')

const dataParser = require('./helper/dataParser')

function retrieveUser(userId, callback) {
    fs.readFile('./users.csv', function (error, data) {
        if (error) {
            callback(error)

            return
        }

        const users = dataParser(data)

        // const user = users.find(user => user.id === userId)

        const user = users.find(function (user) {
            return user.id === userId
        })

        if (!user) {
            callback(new Error('User not found'))

            return
        }

        callback(null, user)
    })
}

module.exports = retrieveUser