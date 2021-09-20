import React from 'react'
import { StyleSheet, View,Text } from 'react-native';

const Search = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textHeading}>Search</Text>
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
export default Search
