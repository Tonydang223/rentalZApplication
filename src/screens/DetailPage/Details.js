import React from 'react'
import { StyleSheet, View, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';


const Details = ({navigation}) => {
    const route = useRoute()
    const {idCard} = route.params
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textHeading}>Detail</Text>
            <Text style={styles.textHeading}>{idCard}</Text>
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
export default Details
