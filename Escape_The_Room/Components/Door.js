import React from "react";
import { View, Pressable, Text } from "react-native";

const Door = ({openDoor, currentValue}) => {
    return(
        <View style={{flex:1}}>
            <View style={{height:"15%"}} />
            <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
                <View style={{width:250, backgroundColor:"#a86b32"}}>
                    <Pressable style={{flex:1}} onPress={() => {openDoor(currentValue["hasKey"])}}>
                        <View style={{flex:1,flexDirection:"column", alignItems:"flex-end", justifyContent:"center", borderColor:"black", borderWidth:5}}>
                            <View style={{flex:2}} />
                            <Text style={{flex:1,color:"yellow", fontSize:50}}>● </Text>
                            <View style={{flex:2}} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>

    )
}
export default Door;