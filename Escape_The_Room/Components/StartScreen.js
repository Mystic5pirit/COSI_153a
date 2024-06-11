import React from "react";
import { View, Text, Button } from "react-native";

const StartScreen = ({navigation}) => {
    return (
      <View style={{backgroundColor:'#89CFF0', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <Button
          title="Go to Level 1"
          onPress={() => navigation.navigate('Level1')}
        />
      </View>
    );
}

export default StartScreen;