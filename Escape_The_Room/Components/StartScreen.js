import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { View, Text, Button, Pressable } from "react-native";
import { useValue } from "./PersistentValueContext";




const StartScreen = ({navigation}) => {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const {currentValue, setCurrentValue} = useValue();
  let maxLevel = 2;
  useEffect(() => {setCurrentValue({...currentValue, maxLevel:maxLevel})}, [])

  const updateLevel = (change) => {
    let newLevel = selectedLevel+change;
    let unlockedLevel = currentValue["unlockedLevel"]
    if (newLevel <= 1){
      setSelectedLevel(1)
    }else if (newLevel < unlockedLevel){
      setSelectedLevel(newLevel)
    } else {
      setSelectedLevel(unlockedLevel)
    }

  }

  const validLevel = () => {
    if (selectedLevel <= 0){
      return("Level1")
    }
    let unlockedLevel = 2
    if (selectedLevel < unlockedLevel){
      return("Level" + selectedLevel);
    } else {
      return("Level" + unlockedLevel);
    }
  }


  return (
    <SafeAreaView style={{backgroundColor:'#89CFF0', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <View style={{height:"7%", width:"50%", flexDirection:"row"}}>
        <Pressable style={{flex:2, backgroundColor:"blue", borderRadius:20,
          borderColor:"black", borderWidth:4}} onPress={()=>updateLevel(-1)}>
          <Text adjustsFontSizeToFit={true}
            style={{fontSize:100, alignSelf:"center", justifyContent:"center", color:"white", padding:0}}>{"<I"}</Text>
        </Pressable>
        <View style={{flex:0.1}} />
        <Pressable style={{flex:5, backgroundColor:"blue", borderRadius:20,
          borderColor:"black", borderWidth:4}} onPress={() => navigation.navigate(validLevel())}>
          <Text adjustsFontSizeToFit={true}
            style={{fontSize:100, alignSelf:"center", justifyContent:"center", color:"white", padding:5}}>{"Level " + selectedLevel}</Text>
        </Pressable>
        <View style={{flex:0.1}} />
        <Pressable style={{flex:2, backgroundColor:"blue", borderRadius:20,
          borderColor:"black", borderWidth:4}} onPress={()=>updateLevel(1)}>
        <Text adjustsFontSizeToFit={true}
            style={{fontSize:100, alignSelf:"center", justifyContent:"center", color:"white", padding:0}}>{"I>"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default StartScreen;