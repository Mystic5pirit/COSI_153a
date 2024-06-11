import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './StartScreen';
import Level1_Wall1 from './Level_1/Wall1'
import Level1_Wall2 from './Level_1/Wall2'
import Level1_Wall3 from './Level_1/Wall3'
import AboutScreen from './AboutScreen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Level1 = ()  =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name='Wall1' component={Level1_Wall1} options={{unmountOnBlur: true}} />
            <Tab.Screen name='Wall2' component={Level1_Wall2} options={{unmountOnBlur: true}} />
            <Tab.Screen name='Wall3' component={Level1_Wall3} options={{unmountOnBlur: true}} />
        </Tab.Navigator>
    )
}


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName='Start'>
                <Stack.Screen name='Start' component={StartScreen} />
                <Stack.Screen name='About' component={AboutScreen} />
                <Stack.Screen name='Level1' component={Level1} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;