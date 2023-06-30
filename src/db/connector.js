const sqlite3 = require('better-sqlite3')
const path = require("path")
const DB_URL = path.join(__dirname, "/public/db/database.db")

const db = sqlite3(DB_URL)

export {
    db
}