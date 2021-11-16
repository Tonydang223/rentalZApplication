import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'
import {Asset} from 'expo-asset'
import {openDatabase} from 'expo-sqlite'
import { useEffect } from 'react'
const dbSqlite = async()=> {
    if(!(await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite`)).exists){
        await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`,{intermediates:true})
    }
        await FileSystem.downloadAsync(
            Asset.fromModule(require("../assets/dbRen.db")).uri,
            `${FileSystem.documentDirectory}SQLite/dbRen.db`
        ).then((result)=>{
            console.log(result)
        })
    return SQLite.openDatabase("dbRen.db")
}
const db = openDatabase("rentalApplicationDB.db",'1.0',"db",100000)

export {dbSqlite,db}