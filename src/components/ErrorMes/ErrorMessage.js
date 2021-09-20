import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

const ErrorMessage = (props) => {
    const {error} = props
    return (
        <View style={styles.wrapperError}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   wrapperError:{
       flex:1,
   },
   errorText:{
       color:'#ff3333',
       fontSize:14,
       letterSpacing:0.8,
       marginTop:5
   }
})

export default ErrorMessage
