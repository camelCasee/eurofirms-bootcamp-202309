function dataParser(data) {
    const parsedData = data.toString().split('\n').map(function (user) {
        const [id, name, email] = user.split(', ')

        const userResult = { id, name, email }

        return userResult
    })

    return parsedData
}

module.exports = dataParser