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

    await executeQuery(
        `CREATE TABLE IF NOT EXISTS accounts (
            id TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL UNIQUE,
            initial_balance REAL NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`
    )

    await executeQuery(
        `CREATE TABLE IF NOT EXISTS categories (
            id TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL UNIQUE,
            icon_name TEXT NOT NULL,
            icon_type TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`
    )

    await executeQuery(
        `CREATE TABLE IF NOT EXISTS transactions (
            id TEXT NOT NULL UNIQUE,
            name TEXT,
            value REAL NOT NULL,
            is_income BOOLEAN DEFAULT(FALSE),
            account_id TEXT NOT NULL,
            category_id TEXT NOT NULL,
            transaction_date DATETIME NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(account_id) REFERENCES accounts(id) ON DELETE CASCADE,
            FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE CASCADE
        )`
    )

    await executeQuery(
        `CREATE TABLE IF NOT EXISTS transfers (
            id TEXT NOT NULL UNIQUE,
            from_id TEXT NOT NULL,
            to_id TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(from_id) REFERENCES transactions(id) ON DELETE CASCADE,
            FOREIGN KEY(to_id) REFERENCES transactions(id) ON DELETE CASCADE
        )`
    )
}