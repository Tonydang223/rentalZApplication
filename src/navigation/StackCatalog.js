import React from 'react'
import Catalog from '../screens/Catalog'
import EditFormScreen from '../screens/NestingRouteCatalog/EditFormScreen'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import Details from '../screens/DetailPage/Details'

const StackCatalog = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={()=>({
          headerShown:false
        })}
        >
            <Stack.Screen name="Catalog" children={()=>(<Catalog />)} />
            <Stack.Screen name="Details" children={()=>(<Details />)}/>
            <Stack.Screen name="EditForm" component={EditFormScreen}/>
        </Stack.Navigator>
    )
}

export default StackCatalog
