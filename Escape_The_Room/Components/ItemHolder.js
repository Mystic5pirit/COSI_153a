import React from "react";
import { View, Text } from "react-native";
import { useValue } from "./ValueContext";

const ItemHolder = () => {
    const {currentValue,setCurrentValue} = useValue();

    return(
        <View style={{height:"5%", backgroundColor:"white"}}>
            <Text adjustsFontSizeToFit={true} style={{flex:1, fontSize:20}}>{currentValue["items"]}</Text>

        </View>
    )
}

export default ItemHolder;