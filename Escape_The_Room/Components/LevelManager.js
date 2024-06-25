import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PersistentValueProvider from './PersistentValueContext';
import StartScreen from './StartScreen';
import AboutScreen from './AboutScreen'
import VictoryScreen from './VictoryScreen';
import Level1 from './Level_1/Level1'
import Level2 from './Level_2/Level2';

const Stack = createNativeStackNavigator();


const App = () => {
    // Max Level is stored in StartScreen
    const data = {unlockedLevel:1, maxLevel:2}
    return (
        <PersistentValueProvider value={data}>
            <NavigationContainer>
                <Stack.Navigator  initialRouteName='Start'>
                    <Stack.Screen name='Start' component={StartScreen} options={{headerShown:false}}/>
                    <Stack.Screen name='About' component={AboutScreen}/>
                    <Stack.Screen name='Level1' component={Level1} options={{headerShown:false}} />
                    <Stack.Screen name='Level2' component={Level2} options={{headerShown:false}} />
                    <Stack.Screen name='Victory' component={VictoryScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
         </PersistentValueProvider>
        
    );
}

export default App;