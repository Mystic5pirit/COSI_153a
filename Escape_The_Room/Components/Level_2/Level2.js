import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ValueProvider from '../ValueContext';

import Wall1 from './Wall1'
import {GW, JA, TJ, JM, JM2, JQA, AJ, MVB, WHH, JT} from './StatueWall'


const Tab = createBottomTabNavigator();

const Level2 = ()  =>{
    const data = {secretCode:[1, 7, 7, 6], currentCode:[]};
    return (
        <ValueProvider value={data}>
            <Tab.Navigator>
                <Tab.Screen name='Door' component={Wall1} options={{unmountOnBlur: true}} />
                <Tab.Screen name='GA' component={GW} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='JA' component={JA} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='TJ' component={TJ} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='JM' component={JM} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='JM2' component={JM2} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='JQA' component={JQA} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='AJ' component={AJ} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='MVB' component={MVB} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='WHH' component={WHH} options={{unmountOnBlur: true}}/>
                <Tab.Screen name='JT' component={JT} options={{unmountOnBlur: true}}/>
            </Tab.Navigator>
        </ValueProvider>
    )
}

export default Level2;