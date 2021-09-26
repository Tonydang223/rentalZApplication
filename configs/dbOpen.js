
import * as SQLite from 'expo-sqlite'
const dbSqlite = {
    dbOpen:()=>{
        return SQLite.openDatabase('dbRentalZ')
    }
}

export default dbSqlite