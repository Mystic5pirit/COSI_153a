import React, {useState} from "react";
import { View, Pressable, Text, TextInput } from "react-native";

const Box = ({requiredText, hintText, navigation, setDisplayText}) =>{
    const [enteredText, setEnteredText] = useState("");

    const openBox = () => {{
        if(enteredText == {requiredText}['requiredText']){
            navigation.navigate('BoxView');
            setDisplayText("");
        } else {
            setDisplayText("The Box Appears To Be Locked");
            console.log({requiredText}['requiredText'])
            console.log(enteredText)
        }
    }}
    return(
        <View style={{flex:1, borderColor:"black", flexDirection:"col", alignItems:"center", justifyContent:"flex-end" }}>
                <Pressable style={{height:"50%", width:"40%"}} onPress={() => openBox()}>
                    <View style={{flex:1, backgroundColor:"#763900",  borderColor:"black", borderWidth:3}}>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                            <View style={{flex:100}}/>
                            <Text style={{flex:1, fontFamily:"roboto", color:"#561900", fontSize:25}} textAlign="center">{hintText}</Text>
                            <View style={{flex:100}}/>
                        </View>
                    </View>
                    <View style={{flex:2, backgroundColor:"#763900",  borderColor:"black", borderWidth:3, alignItems:"center"}}>
                        <TextInput placeholder={requiredText.split('').
                        map(character => {
                            if (character == " "){
                                return(" ");
                            } else {return "_";}}).join(' ')} 
                        onChangeText={text => {{setEnteredText(text);
                             if(text == {requiredText}['requiredText'])
                             {setDisplayText("The Box Unlocked");
                             }
                            else {setDisplayText("The Box Appears To Be Locked");}
                        }}}
                        onEndEditing={() => openBox()}
                        style={{textAlign:"center", color:"darkgrey",
                        height:"50%", width:"40%",
                        backgroundColor: "white", borderColor:"black", borderWidth:3, borderTopWidth:0}}></TextInput>
                    </View>
                </Pressable>
            </View>
    )
}
export default Box;