import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ValueProvider from '../ValueContext';

import Level1_Wall1 from './Wall1/Wall1'
import Level1_Wall2 from './Wall2/Wall2'
import Level1_Wall3 from './Wall3/Wall3'

const Tab = createBottomTabNavigator();

const Level1 = ()  =>{
    const data = {hasKey:false, items:""};
    return (
        <ValueProvider value={data}>
            <Tab.Navigator>
                <Tab.Screen name='Wall1' component={Level1_Wall1} options={{unmountOnBlur: true}} />
                <Tab.Screen name='Wall2' component={Level1_Wall2} options={{unmountOnBlur: true}} />
                <Tab.Screen name='Wall3' component={Level1_Wall3} options={{unmountOnBlur: true}} />
            </Tab.Navigator>
        </ValueProvider>
    )
}

export default Level1;