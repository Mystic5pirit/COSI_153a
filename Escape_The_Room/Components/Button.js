import React from "react"
import { Pressable, Text } from "react-native"

const Button = ({text, flex = 1, backgroundColor = "blue", textColor = "white", onPress}) => {
    return(
        <Pressable style={{flex:flex, backgroundColor:backgroundColor, borderRadius:20,
            borderColor:"black", borderWidth:4}} onPress={onPress}>
            <Text adjustsFontSizeToFit={true}
              style={{fontSize:100, alignSelf:"center", justifyContent:"center", color:textColor, padding:5}}>{text}</Text>
        </Pressable>
    )
}

export default Button;
