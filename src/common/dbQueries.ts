import db from "./db"

const executeQuery = (sql: string, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
            resolve(results)
        },
            (error) => {
                console.log(error)
                reject(error)
            })
    })
})


export const createTables = async () => {
    // console.log('Dropping tables')
    // await executeQuery('DROP TABLE IF EXISTS transfers')
    // await executeQuery('DROP TABLE IF EXISTS transactions')
    // await executeQuery('DROP TABLE IF EXISTS categories')
    // await executeQuery('DROP TABLE IF EXISTS accounts')

    console.log('Creating tables...')
    
    await executeQuery(
        `CREATE TABLE IF NOT EXISTS accounts (
            id TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL UNIQUE,
            initial_balance REAL NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`
    )
}