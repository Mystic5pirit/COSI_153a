import React from "react";
import { View, Text, StyleSheet, Pressable, } from "react-native";
import DropdownComponent, {dataFormat} from "./DropdownComponent";
import { useValue, clearData } from "./PersistentValueContext";

const About = ({navigation}) => {
    const {currentValue, setCurrentValue} = useValue();
    let levelList = [];
    for(let i = 1; i <= currentValue["maxLevel"]; i++){
        levelList.push(new dataFormat("Level " + i, i))
    }

    const updateUnlockedLevel = (newValue) => {
        setCurrentValue({...currentValue, unlockedLevel:newValue});
        console.log(currentValue)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>This app is planned to be an escape room type of game.</Text>
            <Text style={styles.text}>It is planned to have different puzzles for each level.</Text>
            <Text style={styles.text}>The player needs to use each wall in the room to solve each puzzle.</Text>
            <Text style={styles.text}>The highest level unlocked is level {currentValue["unlockedLevel"]}</Text>
            <Pressable style={{}} onPress={()=>clearData()}>
                <View style={{backgroundColor:"red", padding:15}}>
                    <Text>WIPE SAVE</Text>
                </View>
            </Pressable>
            <DropdownComponent
             data={levelList}
             value={currentValue["unlockedLevel"]}
             setValue={updateUnlockedLevel} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89CFF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        //fontWeight: 30,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
})

export default About;