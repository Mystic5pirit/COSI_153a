import React, {useState, useEffect} from "react";
import { Pressable, View, Text, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useValue } from "../ValueContext";
import { Accelerometer } from 'expo-sensors';


const Wall = ({navigation}) => {
    const {currentValue,setCurrentValue} = useValue();
    const [leftButtonWidth, setLeftButtonWidth] = useState(7)
    const [rightButtonWidth, setRightButtonWidth] = useState(7)
    const [ballAngle, setBallAngle] = useState(0);

    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [subscription, setSubscription] = useState(null);

    const _subscribe = () => {
        setSubscription(Accelerometer.addListener(setData));
        Accelerometer.setUpdateInterval(100);
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    useEffect(() => {
        if (y > 0){
            if (x > -0.39 && x < 0.39){
                setBallAngle((90 * parseFloat(x.toFixed(2))))
            } else if (x < -0.39) {
                setBallAngle(-35)
                setCurrentValue({...currentValue, rightButtonIsPressed:true})
                setRightButtonWidth(2)
            }else if (x > 0.39) {
                setBallAngle(35)
                setCurrentValue({...currentValue, leftButtonIsPressed:true})
                setLeftButtonWidth(2)
            }
        }
    }, [x, y])
    

return(
    <SafeAreaView style={{backgroundColor:'#89CFF0', flex:1, alignItems:"center"}}>
        <View style={{width:rightButtonWidth + "%", height:"10%", backgroundColor:"red", borderColor:"black", borderWidth:3, borderRightWidth:0,
             position:"absolute", top:"21%", right:0}}/>
        <View style={{width:leftButtonWidth + "%", height:"10%", backgroundColor:"red", borderColor:"black", borderWidth:3, borderLeftWidth:0,
             position:"absolute", top:"21%", left:0}}/>
        <Image style={{height:300, position:"absolute", top:-5, transform: [{rotateZ: ballAngle + "deg"}], transformOrigin: "center top"}} resizeMode="contain" source={require("../../Assets/Images/Discoball.png")}/>
    </SafeAreaView>
)
}
export default Wall;