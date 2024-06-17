import React from "react"
import { View, Text } from "react-native"

/**
 * Takes up 5% of height
 * @param {*} param0 
 * @returns 
 */
const ThoughtBubble = ({displayText}) =>{
    return(
        <View style={{height:30}}>
            <View style={{height:"40%"}}/>
            <View style={{height:"60%", alignItems:"center"}}>
                <View style={{width:"60%", backgroundColor:"white", borderRadius:5, alignItems:"center"}}>
                    <Text adjustsFontSizeToFit={true}>{displayText}</Text>
                </View>
            </View>
        </View>
    )
}

export default ThoughtBubble;