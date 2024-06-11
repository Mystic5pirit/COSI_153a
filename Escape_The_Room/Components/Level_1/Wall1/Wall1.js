import React, {useState} from "react";
import { Pressable, View , Text} from "react-native";
import ThoughtBubble from "../../ThoughtBubble";
import Door from "./Door";

const Wall = () => {
    
    const [displayText, setDisplayText] = useState("");

    const openDoor = (hasKey) => {{
        if(hasKey){

        } else {
            setDisplayText("The Door Appears To Be Locked");
        }
    }}

return(
    <View style={{backgroundColor:'#89CFF0', flex:1, flexDirection:"col"}}>
        <ThoughtBubble displayText={displayText} />
        <Door openDoor={openDoor}/>
    </View>
)
}
export default Wall;