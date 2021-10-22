import * as FileSystem from 'expo-file-system'
import {Asset} from 'expo-asset'
import {openDatabase} from 'expo-sqlite'
import { useEffect } from 'react'
const dbSqlite = async()=> {
    if(!(await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite`)).exists){
        await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`,{intermediates:true})
    }
        await FileSystem.downloadAsync(
            Asset.fromModule(require("../assets/dbRentalZ.db")).uri,
            `${FileSystem.documentDirectory}/SQLite/dbRentalZ.db`
        )
}
const db = openDatabase('dbRentalZ.db','1.0',"dbRental",100000)

export {dbSqlite,db}