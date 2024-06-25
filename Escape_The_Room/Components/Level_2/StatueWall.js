import React, { useState } from "react";
import { View, Image, Pressable } from "react-native";

const StatueWall = ({statueWithHead, statueWithoutHead}) => {
    const[headRemoved, setHeadRemoved] = useState(false);

    if(!headRemoved){
        return(
            <View style={{flex:1}}>
                <Pressable onPress={()=>{setHeadRemoved(true)}}>
                    <Image source={statueWithHead}></Image>
                </Pressable>
            </View>
        )
    }  else {
        return(
            <View style={{flex:1}}>
                <Pressable onPress={()=>{}}>
                    <Image source={statueWithoutHead}></Image>
                </Pressable>
            </View>
        )
    }
    
}
export default StatueWall;