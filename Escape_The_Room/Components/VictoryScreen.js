import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-web";

const VictoryScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor:'#89CFF0', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You Beat The Level!</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Start')}
            />
        </SafeAreaView>
    )
}
export default VictoryScreen;