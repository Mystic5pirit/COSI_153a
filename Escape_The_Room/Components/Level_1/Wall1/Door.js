import React from "react";
import { View, Pressable, Text } from "react-native";

const Door = ({openDoor}) => {
    return(
        <View style={{flex:1}}>
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
export default Door;