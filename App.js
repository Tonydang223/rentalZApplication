import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import Catalog from './src/screens/Catalog';
import Search from './src/screens/Search';
import Details from './src/screens/NestingRouteCatalog/Details';
import Icon from 'react-native-vector-icons/Ionicons'
import GetStarted from './src/screens/StartScreen';
import Explore from './src/screens/Explore';
import AddData from './src/screens/AddData';

export default function App() {
  const [rentalData,setRentalData] = useState({
    data:[],
    empty:false
  })
  const {height,width} = Dimensions.get('screen')

  //ROUTE
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  //Nesting route catalog
  const CatalogNesting = ()=>{
    return(
      <Stack.Navigator
      initialRouteName="Catalog"
      screenOptions={()=>({
        headerShown:false
      })}
      >
          <Stack.Screen name="Catalog" children={()=>(<Catalog rentalData={rentalData}/>)}/>
          <Stack.Screen name="Details" children={()=>(<Details rentalData={rentalData}/>)}/>
      </Stack.Navigator>
    )
  }
  const MainPages = ()=>{
    return(
<BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({route})=>({
        headerShown:false,
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          
          if(route.name === "Home"){
            iconName=focused?'home':'home-outline'
            color=focused?'#22A7F0':'#000000'
          }else if(route.name==="List"){
            iconName=focused?'list':'list-outline'
            color=focused?'#22A7F0':'#000000'
          }else if(route.name==="Search"){
            iconName=focused?'search':'search-outline'
            color=focused?'#22A7F0':'#000000'
          }
          else if(route.name==="Explore"){
            iconName=focused?'map':'map-outline'
            color=focused?'#22A7F0':'#000000'
          }

          return (<Icon name={iconName} size={size} color={color}/>)
        },
        tabBarLabel:({focused})=>{
             if(route.name==="Home"){
               return focused ?(<Text style={styles.label}>Home</Text>):null
             }else if(route.name==="List"){
              return focused ?(<Text style={styles.label}>List</Text>):null
             }
             else if(route.name==="AddData"){
              return null
             }
             else if(route.name==="Search"){
              return focused ?(<Text style={styles.label}>Search</Text>):null
             }
             else if(route.name==="Explore"){
              return focused ?(<Text style={styles.label}>Explore</Text>):null
             }
        },
        tabBarInactiveTintColor:'#383838',
        tabBarStyle:{width:width,paddingTop:4,paddingBottom:4,height:55},
        tabBarLabelStyle:{marginBottom:3},
        tabBarIconStyle:{marginTop:5}
      })}
      >
         <BottomTab.Screen name="Home" component={Home}/>
         <BottomTab.Screen name="List" children={CatalogNesting}/>
         <BottomTab.Screen 
         name="AddData" 
         component={AddData}
         options={({route})=>({
           tabBarIcon:({focused,color,size})=>{
             return(
               <View
               style={styles.wrapIcon}
               >
               <Icon style={styles.iconAdd} name="add" color={'#fff'} size={50}/>
               </View>
             )
           },
           tabBarShowLabel:false
         })}  
         />
         <BottomTab.Screen name="Search" component={Search}/>
         <BottomTab.Screen name="Explore" component={Explore}/>

      </BottomTab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='GetStarted'
      screenOptions={()=>({
        headerShown:false
      })}
      >
        <Stack.Screen name='GetStarted' children={()=>(<GetStarted height={height} width={width}/>)}/>
        <Stack.Screen name='MainPages' component={MainPages}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapIcon:{
    width:60,
    height:60,
    borderRadius:180,
    backgroundColor:'#22A7F0',
    bottom:26,
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
    marginLeft:3,
    marginTop:2
  },
  label:{
    fontSize:11
  }
})
