import React, {useState} from "react";
import { Pressable, View, Text} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useValue } from "../ValueContext";
import ThoughtBubble from "../ThoughtBubble";
import Door from "../Door";

const Wall = ({navigation}) => {
    const {currentValue,setCurrentValue} = useValue();
    const [displayText, setDisplayText] = useState("When Was The Declaration of Independence Signed?");

    const openDoor = () => {{
        currentCode = currentValue["currentCode"]
        codeLength = currentCode.length;
        secretCode = currentValue["secretCode"]
        
        if(currentCode[codeLength-1] == secretCode[3] &&
            currentCode[codeLength-2] == secretCode[2] &&
            currentCode[codeLength-3] == secretCode[1] &&
            currentCode[codeLength-4] == secretCode[0]
        ){
            navigation.navigate("Victory", {currentLevel:2});
        } else {
            setDisplayText("The Door Appears To Be Locked");
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