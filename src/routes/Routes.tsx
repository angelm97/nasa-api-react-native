import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../views/Home';
import Detail from '../views/Detail';


const Stack = createNativeStackNavigator<any>();
const routeScreenDefaultOpt = {
    headerStyle: {
        backgroundColor: 'blue',
        color: 'white',
      
        

    },

    headerTitleStyle: {
        color: 'white',
        fontSize: 25,
      
    }
}


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" options={routeScreenDefaultOpt} component={Home}/>
                <Stack.Screen name="Detail" options={routeScreenDefaultOpt}   component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
