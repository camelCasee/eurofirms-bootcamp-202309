const registerUser = require('./registerUser')

console.log('TEST registerUser')

const name = 'Pepito Grillo'
const email = 'pepito@grillo.com'
const password = '123123123'

registerUser(name, email, password, function (error) {
    console.log('CASE 1 it fails on register user that already exist')

    console.log(error)
    // {Error: User already exist}
})

const name2 = 'Marylin Monroe'
const email2 = 'marylin@monroe.com'
const password2 = '123123123'

registerUser(name2, email2, password2, function (error) {
    console.log('CASE 2 it success on register user that does not exist ')

    console.log({ error })
    //{error: null}
})
