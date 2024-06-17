import React from "react";
import { View, Text } from "react-native-web";
import { useValue } from "./ValueContext";

const ItemHolder = () => {
    const {currentValue,setCurrentValue} = useValue();

    return(
        <View style={{height:"5%", backgroundColor:"white"}}>
            <Text adjustsFontSizeToFit={true} style={{flex:1}}>{currentValue["items"]}</Text>

        </View>
    )
}

export default ItemHolder;