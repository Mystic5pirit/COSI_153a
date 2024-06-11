import React, {useState} from "react";
import { Pressable, View , Text} from "react-native";

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
        <View style={{height:"2%"}}/>
        <View style={{height:"3%", alignItems:"center"}}>
            <View style={{width:"60%", backgroundColor:"white", borderRadius:5, alignItems:"center"}}>
                <Text>{displayText}</Text>
            </View>
        </View>
        <View style={{height:"15%"}} />
        <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
            <View style={{width:"20%", backgroundColor:"#a86b32"}}>
                <Pressable style={{flex:1}} onPress={() => {openDoor(false)}}>
                    <View style={{flex:1,flexDirection:"column", alignItems:"flex-end", justifyContent:"flex-start", borderColor:"black", borderWidth:5}}>
                        <View style={{flex:100}} />
                        <Text style={{flex:1,color:"yellow", fontSize:50}}>● </Text>
                        <View style={{flex:100}} />
                    </View>
                </Pressable>
            </View>
        </View>
    </View>
)
}
export default Wall;