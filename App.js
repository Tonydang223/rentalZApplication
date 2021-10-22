import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useRef, useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import GetStarted from './src/screens/StartScreen';
import BottomTabMainPage from './src/navigation/BottomTabMainPage';
import { db } from './configs/dbOpen';

export default function App() {

  const {height,width} = Dimensions.get('screen')
  const Stack = createStackNavigator();
  //createTableData
  useEffect(()=>{
    createTableData();
  },[])

  const createTableData = async ()=>{
       await db.transaction((tx)=>{
          tx.executeSql(`CREATE TABLE IF NOT EXISTS rentalDatabase(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            propertyType TEXT,
            bedRoom TEXT,
            createdAt TEXT,
            monthlyPrice NUMERIC,
            furTypes TEXT,
            note TEXT,
            name TEXT,
            updatedAt TEXT,
            images BLOB NOT NULL
          );`,
            [],
            (txn,result)=>console.log(result),
            (error)=>console.log('loi toa')
            );
            tx.executeSql(`
            CREATE UNIQUE INDEX rental_idx ON rentalDatabase 
            (propertyType,
              bedRoom,
              monthlyPrice,
              furTypes,
              name
              )
            `,
            [],
            (tx,result)=>console.log(result),
            (error)=>{console.log('error create index',error)}
            )
            console.log('VO')
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


