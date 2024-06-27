import React, {useState} from "react";
import { Pressable, View, Text} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useValue } from "../ValueContext";
import ThoughtBubble from "../ThoughtBubble";
import ItemHolder from "../ItemHolder";
import Door from "../Door";

const Wall = ({navigation}) => {
    const {currentValue,setCurrentValue} = useValue();
    const [displayText, setDisplayText] = useState("");

    const openDoor = (hasKey) => {{
        if(hasKey){
            navigation.navigate("Victory");
        } else {
            setDisplayText("The Door Appears To Be Locked");
        }
    }}

return(
    <SafeAreaView style={{backgroundColor:'#89CFF0', flex:1, flexDirection:"col"}}>
        <ThoughtBubble displayText={displayText} />
            <Door openDoor={openDoor} currentValue={currentValue}/>
        <ItemHolder/>
    </SafeAreaView>
)
}
export default Wall;