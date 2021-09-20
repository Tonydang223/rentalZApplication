import React from 'react'
import { StyleSheet, View,Text } from 'react-native';

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
        fontSize:25
    }
})
export default Home
