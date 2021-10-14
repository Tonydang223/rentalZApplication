import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useRef, useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import GetStarted from './src/screens/StartScreen';
import dbSqlite from './configs/dbOpen';
import BottomTabMainPage from './src/navigation/BottomTabMainPage';

export default function App() {

  const {height,width} = Dimensions.get('screen')
  const Stack = createStackNavigator();
  //createTableData
  useEffect(()=>{
    createTableData();
  },[])
  const createTableData = async()=>{
    await dbSqlite.dbOpen().transaction((tx)=>{
      tx.executeSql(`CREATE TABLE IF NOT EXISTS rental 
      (rental_id INTEGER PRIMARY KEY AUTOINCREMENT,
        property TEXT,
        bedRoom VARCHAR(100) NOT NULL, 
        createdAt TIMESTAMP NOT NULL, 
        price NUMERIC NOT NULL, 
        furType VARCHAR(100), 
        note TEXT, 
        name TEXT,
        updatedAt TIMESTAMP NOT NULL, 
        image BLOB NOT NULL)`,
        (tx,result)=>{},
        (error)=>{console.log("Error",error)}
        )
        console.log("Connect successfully!!!")
    })
  }


  
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='GetStarted'
      screenOptions={()=>({
        headerShown:false
      })}
      >
        <Stack.Screen name='GetStarted' children={()=>(<GetStarted height={height} width={width}/>)}/>
        <Stack.Screen name='MainPages' component={BottomTabMainPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


