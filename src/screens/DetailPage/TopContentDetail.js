import React, { useEffect, useState } from 'react'
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
const TopContentDetail = (props) => {
    const {navigation,scrollDetail,onShare} = props
    const safeArea =useSafeAreaInsets()
    const {width} = Dimensions.get('window')
    const goBackSearch = ()=>{
        navigation.goBack()
    }
    const isFloating = !!scrollDetail
    const [isTransparentD,setIsTransparentD] = useState(isFloating)
    useEffect(()=>{
      if(!scrollDetail){
          return
      }
      const listener = scrollDetail.addListener(a=>{
          const topNavOffSet = 360 -(70+safeArea.top) - safeArea.top
          if(isTransparentD && a.value > topNavOffSet){
              setIsTransparentD(false)
          }else if(!isTransparentD && a.value < topNavOffSet){
              setIsTransparentD(true)
          }
      })
      return ()=>scrollDetail.removeListener(listener)
    },[isTransparentD])
    return (
        <> 
       <StatusBar
       barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
        <View style={styles.wrapper(width,safeArea,isFloating,isTransparentD)}>
        <View style={styles.icon}>
            <Icon 
            name={isTransparentD?'arrow-back-circle':"arrow-back-outline"} 
            size={33} 
            color={isTransparentD?'#fff':'#000'}
            style={{marginBottom:10,marginTop:15}}
            onPress={()=>goBackSearch()}
            />
            <Icon name={isTransparentD?'arrow-redo-circle':"arrow-redo-outline"} 
            size={33} 
            color={isTransparentD?'#fff':'#000'}
            style={{marginBottom:10,marginTop:15}}
            onPress = {()=>onShare()}
            />
        </View>
            
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    wrapper:(width,safeAre,isFloating,isTransparentD)=>({
        justifyContent:'center',
        width:width,
        height:70 + safeAre.top,
        marginBottom:isFloating? -70 -safeAre.top:0,
        zIndex:110,
        shadowOffset:{y:0},
        elevation: isTransparentD ? 0.01 : 6,
        backgroundColor:isTransparentD?null:'#fff'
        
    }),
    icon:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:13,
        paddingRight:13,
        marginTop:20
        
    }
})

export default TopContentDetail
