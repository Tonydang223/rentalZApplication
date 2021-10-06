import React from 'react'
import Search from '../screens/Search'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SearchPage from './../screens/NestingSearch/SearchPage';
import Details from '../screens/DetailPage/Details';

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
        </Stack.Navigator>
    )
}

export default StackSearch
