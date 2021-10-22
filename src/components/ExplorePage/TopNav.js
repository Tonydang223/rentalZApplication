import React, { useEffect, useState } from 'react'
import { StyleSheet, View,Text,TextInput, StatusBar,TouchableOpacity } from 'react-native';
import {Input, SearchBar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {useSafeAreaFrame, useSafeAreaInsets} from 'react-native-safe-area-context'
const TopNav = (props) => {
    const {navigation,scrollA} = props
    const safeArea = useSafeAreaInsets()
    const onClickHandleNextPage=()=>{
        navigation.navigate('SearchPage')
    }
    const isFloating = !!scrollA
    const [isTransparent,setIsTransparent] = useState(isFloating)
    useEffect(()=>{
      if(!scrollA){
          return
      }
      const listener = scrollA.addListener(a=>{
          const topNavOffSet = 350 -(80+safeArea.top) - safeArea.top
          if(isTransparent && a.value > topNavOffSet){
              setIsTransparent(false)
          }else if(!isTransparent && a.value < topNavOffSet){
              setIsTransparent(true)
          }
      })
      return ()=>scrollA.removeListener(listener)
    },[isTransparent])
    return (
       <> 
       <StatusBar
       barStyle={isTransparent?'light-content':'dark-content'}
        backgroundColor="transparent"
        translucent
      />
        <View style={styles.wrapper(safeArea,isFloating,isTransparent)}>
            <TouchableOpacity
                style={styles.textInput(isTransparent)}
                onPress={onClickHandleNextPage}
            >
            <Icon name="search" color="#0000cd" size={20}/>
            <Text style={{color:'#000',fontSize:14,marginLeft:8}}>What are your property looking ?</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}
const styles = {
    wrapper:(safeArea, isFloating, isTransparent)=>({
        justifyContent:'center',
        backgroundColor:isTransparent?null:'#fff',
        alignItems:'center',
        paddingTop: 20,
        height:80 + safeArea.top,
        shadowOffset:{y:0},
        elevation: isTransparent ? 0.01 : 5,
        zIndex:100,
        marginBottom: isFloating? -80 -safeArea.top:0
    }),
    iconSearch:{
    
    },
    textHeading:{
        fontSize:25
    },
    textInput:(isTransparent)=>({
        height:50,
        width:320,
        borderStyle:'solid',
        borderRadius: 25,
        shadowColor:'#000',
        shadowOffset:{width:1,height:10},
        shadowOpacity:0.4,
        shadowRadius:10,
        backgroundColor:isTransparent?'#fff':'rgb(220,220,220)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        shadowOffset:{width:2,height:5},
        shadowColor:'#fff',
        shadowOpacity:.4,
        shadowRadius:20,
        elevation:15
    })
}
export default TopNav
