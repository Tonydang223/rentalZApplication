import React from 'react'
import { StyleSheet, View,Text } from 'react-native';

const Explore = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textHeading}>Explore</Text>
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
export default Explore
