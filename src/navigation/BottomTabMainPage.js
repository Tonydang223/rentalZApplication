import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import AddData from '../screens/AddData';
import WishList from '../screens/WishList';
import Explore from '../screens/Explore';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StackSearch from './StackSearch';
import StackCatalog from './StackCatalog';

const BottomTabMainPage = () => {
    const {height,width} = Dimensions.get('screen')
    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator
      initialRouteName="Search"
      screenOptions={({route})=>({
        headerShown:false,
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          
          if(route.name === "SearchRoutes"){
            iconName=focused?'search':'search-outline'
            color=focused?'#22A7F0':'#000000'
          }else if(route.name==="List"){
            iconName=focused?'list':'list-outline'
            color=focused?'#22A7F0':'#000000'
          }else if(route.name==="WishList"){
            iconName=focused?'heart':'heart-outline'
            color=focused?'#22A7F0':'#000000'
          }
          else if(route.name==="Explore"){
            iconName=focused?'map':'map-outline'
            color=focused?'#22A7F0':'#000000'
          }

          return (<Icon name={iconName} size={size} color={color}/>)
        },
        tabBarLabel:({focused})=>{
             if(route.name==="SearchRoutes"){
               return focused ?(<Text style={styles.label}>Explore</Text>):null
             }else if(route.name==="List"){
              return focused ?(<Text style={styles.label}>List</Text>):null
             }
             else if(route.name==="AddData"){
              return null
             }
             else if(route.name==="WishList"){
              return focused ?(<Text style={styles.label}>WishList</Text>):null
             }
             else if(route.name==="Explore"){
              return focused ?(<Text style={styles.label}>Map</Text>):null
             }
        },
        tabBarInactiveTintColor:'#383838',
        tabBarStyle:{width:width,paddingTop:4,paddingBottom:4,height:55},
        tabBarLabelStyle:{marginBottom:3},
        tabBarIconStyle:{marginTop:5},
        tabBarHideOnKeyboard:true

      })}
      >
         <BottomTab.Screen name="SearchRoutes" children={()=><StackSearch/>}/>
         <BottomTab.Screen 
         name="AddData" 
         children={()=>(<AddData />)}
         options={({route})=>({
           tabBarIcon:({focused,color,size})=>{
             return(
               <View
               style={styles.wrapIcon}
               >
               <Icon style={styles.iconAdd} name="add" color={'#fff'} size={38}/>
               </View>
             )
           },
           tabBarShowLabel:false
         })}  
         />
         <BottomTab.Screen name="List" children={()=><StackCatalog/>}/>

      </BottomTab.Navigator>
    )
}
const styles = StyleSheet.create({
    wrapIcon:{
      width:45,
      height:45,
      borderRadius:90,
      bottom:4,
      backgroundColor:'#22A7F0',
      alignItems:'center',
      shadowColor:'#fff',
      elevation:4,
      shadowOffset:{width:5,height:2},
      shadowRadius:5,
      shadowOpacity:0.5,
      borderColor:'#fff',
      borderWidth:2,
    },
    iconAdd:{
      borderRadius:3,
      marginLeft:2,
    },
  
    label:{
      fontSize:11
    }
  })
export default BottomTabMainPage
