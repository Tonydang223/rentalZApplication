import React from 'react'
import Details from '../screens/NestingRouteCatalog/Details'
import ResultSearch from '../screens/NestingSearch/ResultSearch'
import Search from '../screens/Search'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SearchPage from './../screens/NestingSearch/SearchPage';

const StackSearch = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={()=>({
          headerShown:false,
        })}
        >
            <Stack.Screen name="Search" children={()=>(<Search/>)} />
            <Stack.Screen 
            name="SearchPage"
            options={{
              gestureEnabled:true,
              gestureDirection:'horizontal',
              ...TransitionPresets.FadeFromBottomAndroid,
              animationEnabled:true,
            }}
            animation="fade"
            children={()=>(<SearchPage />)} />  
            <Stack.Screen name="Details" children={()=>(<Details />)}/>
            <Stack.Screen name="ResultSearch" children={()=>(<ResultSearch />)}/>
        </Stack.Navigator>
    )
}

export default StackSearch
