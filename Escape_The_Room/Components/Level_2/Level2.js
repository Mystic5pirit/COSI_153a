import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ValueProvider from '../ValueContext';

import Level1_Wall1 from './Wall1'
import StatueWall from './StatueWall'


const Tab = createBottomTabNavigator();

const Level2 = ()  =>{
    const data = {hasKey:false, items:""};
    return (
        <ValueProvider value={data}>
            <Tab.Navigator>
                <Tab.Screen name='Wall1' component={Level1_Wall1} options={{unmountOnBlur: true}} />
                <Tab.Screen name='Wall2' component={StatueWall} options={{unmountOnBlur: true}} initialParams={{
                    statueWithHead:"../../Assets/Images/Presidents/Presidents1.png", 
                    statueWithoutHead:"../../Assets/Images/Presidents/Presidentss.png"}}/>
            </Tab.Navigator>
        </ValueProvider>
    )
}

export default Level2;