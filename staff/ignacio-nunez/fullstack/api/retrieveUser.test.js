const retrieveUser = require('./retrieveUser')

console.log('TEST retrieveUser')

const userId = '46lhfnkefx00'

retrieveUser(userId, function (error, user) {
    console.log('CASE 1 it success on found user Pepito Grillo with id 46lhfnkefx00')

    console.log({ error })
    //{error: null}

    console.log(user)
    // {id: 46lhfnkefx00, name: Pepito Grillo, email: pepito@grillo.com}
})

const userId2 = '46lhfnkefx001'

retrieveUser(userId2, function (error, user) {
    console.log('CASE 2 it fails on dont found user with id 46lhfnkefx001')

    console.log(error)
    // {Error: User not found}

    console.log({ user })
    // {user: undefined}
})