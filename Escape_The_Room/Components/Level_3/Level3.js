import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ValueProvider from '../ValueContext';

import Wall1 from './Wall1'
import Wall2 from './Wall2'

const Tab = createBottomTabNavigator();

const Level3 = ()  =>{
    const data = {leftButtonIsPressed:false, rigthButtonIsPressed:false};
    return (
        <ValueProvider value={data}>
            <Tab.Navigator>
                <Tab.Screen name='Wall1' component={Wall1} options={{unmountOnBlur: true}} />
                <Tab.Screen name='Wall2' component={Wall2} />
            </Tab.Navigator>
        </ValueProvider>
    )
}

export default Level3;