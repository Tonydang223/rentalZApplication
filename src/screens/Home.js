import React, { useEffect, useState } from 'react'
import { StyleSheet, View,Text, Button, Platform, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker'
import dbSqlite from '../../configs/dbOpen';
const Home = () => {
   
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textHeading}>Home</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    textHeading:{
        fontSize:25,
        marginTop:50
    }
})
export default Home
