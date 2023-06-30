const { db } = require('./connector')

const getData = () => {
    const query = "SELECT * FROM TEST"
    const cursor = db.prepare(query)
    const data = cursor.all()
    return data
}

module.exports = {
    getData
}