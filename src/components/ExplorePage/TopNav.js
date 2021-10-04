import React from 'react'
import { StyleSheet, View,Text,TextInput, StatusBar,TouchableOpacity } from 'react-native';
import {Input, SearchBar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {useSafeAreaFrame, useSafeAreaInsets} from 'react-native-safe-area-context'
const TopNav = (props) => {
    const {navigation} = props
    const safeArea = useSafeAreaInsets()
    const onClickHandleNextPage=()=>{
        navigation.navigate('SearchPage')
    }
    return (
       <> 
       <StatusBar
        backgroundColor="transparent"
        translucent
      />
        <View style={styles.wrapper(safeArea)}>
            <TouchableOpacity
                style={styles.textInput}
                onPress={onClickHandleNextPage}
            >
            <Icon name="search" color="#0000cd" size={20}/>
            <Text style={{color:'#000',fontSize:14,marginLeft:8}}>What are your property looking ?</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    wrapper:(safeArea, isFloating, isTransparent)=>({
        justifyContent:'center',
        backgroundColor:'#fff',
        alignItems:'center',
        elevation:5,
        paddingTop: safeArea.top,
        height:90 + safeArea.top,
    }),
    iconSearch:{
    
    },
    textHeading:{
        fontSize:25
    },
    textInput:{
        height:50,
        width:320,
        borderStyle:'solid',
        borderRadius: 25,
        shadowColor:'#000',
        shadowOffset:{width:1,height:10},
        shadowOpacity:0.4,
        shadowRadius:10,
        backgroundColor:'rgb(220,220,220)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5
    }
})
export default TopNav
