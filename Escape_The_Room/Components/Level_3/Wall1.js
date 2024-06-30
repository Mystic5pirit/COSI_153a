import React, {useState} from "react";
import { Pressable, View, Text} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useValue } from "../ValueContext";
import ThoughtBubble from "../ThoughtBubble";
import Door from "../Door";

const Wall = ({navigation}) => {
    const {currentValue,setCurrentValue} = useValue();
    const [displayText, setDisplayText] = useState("");

    const openDoor = () => {{
        if(currentValue["leftButtonIsPressed"] && currentValue["rightButtonIsPressed"]){
            navigation.navigate("Victory", {currentLevel:1});
        } else {
            setDisplayText("Maybe Some Buttons Need to be Pressed");
        }
    }}

return(
    <SafeAreaView style={{backgroundColor:'#89CFF0', flex:1, flexDirection:"col"}}>
        <ThoughtBubble displayText={displayText} />
        <Door openDoor={openDoor} currentValue={currentValue}/>
    </SafeAreaView>
)
}
export default Wall;