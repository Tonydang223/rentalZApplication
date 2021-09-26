import React, { useState } from 'react'
import { StyleSheet, View,Text,Image, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
const GetStarted = (props) => {
    const navigation = useNavigation()
    const {height,width}  = props
    const heightImage = (height*60)/100
    const onClickNav = ()=>{
       navigation.navigate('MainPages')
    }
    return (
        <ImageBackground
        source={require('../../assets/images/backgound.jpg')}
        style={[styles.wrapper,{width:width,height:height}]}
        >
        <View style={styles.wrapper}>

        </View>
        <View style={[styles.content]}>
        <Text style={styles.heading}>Welcome,</Text>
        <Text style={styles.heading}>RentalZ</Text>
        <Text style={styles.text}>Thank you for using my app, We will bring you awesome experience. Have a nice day !!!</Text>
        <View style={styles.wrapperBtn}>
        <TouchableOpacity
           style={styles.btn}
           onPress={onClickNav}
           >

           <Text style={styles.textBtn}>Get Started</Text>
           <Icon name='chevron-forward-outline' size={25} color="#fff"/>
           </TouchableOpacity>
        </View>
        </View>
        

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
    },
    textHeading:{
        fontSize:25
    },
    imgContainer:{
      alignItems:'center',
    //   elevation:10,

    },
    heading:{
        fontSize:50,
        paddingBottom:2,
    },
    text:{
        fontSize:17,
        marginTop:30,
        color:'#8C979A'
    },

    img:{
        width:'100%',
        height:'100%',
    },
    contentInside:{
        flex:1,
        height:'100%',
        width:'100%',
        alignItems:'flex-start',
        flexDirection:'column',
    },
    content:{
        backgroundColor:'#fff',
        elevation:20,
        flex:1,
        width:'99.5%',
        flexDirection:'column',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        shadowColor:'#fff',
        shadowOffset:{width:2,height:2},
        shadowRadius:5,
        shadowOpacity:0.5,    
        padding:20    
    },
    btn:{
        display:'flex',
        flexDirection:'row',
        width:150,
        height:50,
        borderRadius:10,
        elevation:8,
        backgroundColor:'#4B77BE',
        alignItems:'center',
        right:0,
        shadowColor:'#fff',
        shadowOffset:{width:2,height:2},
        shadowRadius:5,
        shadowOpacity:0.5,
        marginTop:60,
        paddingLeft:19,
        paddingRight:19
    },
    textBtn:{
        paddingTop:10,
        paddingBottom:10,
        fontSize:20,
        color:'#fff'
    },
    wrapperBtn:{
        flex:1,
        width:'100%',
        marginTop:20,
        alignItems:'flex-end'
    }


})
export default GetStarted
