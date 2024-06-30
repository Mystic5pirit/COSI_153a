import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native";
import { useValue } from "./PersistentValueContext";

const VictoryScreen = ({navigation, route}) => {
    const {currentValue, setCurrentValue} = useValue();
    if (route.params["currentLevel"] >= currentValue["unlockedLevel"]){
        useEffect(()=>{setCurrentValue({...currentValue, unlockedLevel:(Math.min(currentValue["maxLevel"], (currentValue["unlockedLevel"] + 1)))})}, [])
    }

    return(
        <SafeAreaView style={{backgroundColor:'#89CFF0', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You Beat The Level!</Text>
            <Button
            title="Go to Home"
            onPress={() => {navigation.navigate('Start')}}
            />
        </SafeAreaView>
    )
}
export default VictoryScreen;