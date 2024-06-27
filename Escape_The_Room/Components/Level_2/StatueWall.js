import React, { useEffect, useState } from "react";
import { View, Image, Pressable } from "react-native";

const StatueWall = ({statueWithHead, statueWithoutHead, presidentNumber}) => {
    presidentNumber-= 1;
    const statuesWithHeads = [
        require("../../Assets/Images/Presidents/Presidents1.png"),
        require("../../Assets/Images/Presidents/Presidents3.png"),
        require("../../Assets/Images/Presidents/Presidents5.png"),
        require("../../Assets/Images/Presidents/Presidents7.png"),
        require("../../Assets/Images/Presidents/Presidents9.png"),
        require("../../Assets/Images/Presidents/Presidents11.png"),
        require("../../Assets/Images/Presidents/Presidents13.png"),
        require("../../Assets/Images/Presidents/Presidents15.png"),
        require("../../Assets/Images/Presidents/Presidents17.png"),
        require("../../Assets/Images/Presidents/Presidents19.png"), 
    ]
    const statuesWithoutHeads = [
        require("../../Assets/Images/Presidents/Presidents2.png"),
        require("../../Assets/Images/Presidents/Presidents4.png"),
        require("../../Assets/Images/Presidents/Presidents6.png"),
        require("../../Assets/Images/Presidents/Presidents8.png"),
        require("../../Assets/Images/Presidents/Presidents10.png"),
        require("../../Assets/Images/Presidents/Presidents12.png"),
        require("../../Assets/Images/Presidents/Presidents14.png"),
        require("../../Assets/Images/Presidents/Presidents16.png"),
        require("../../Assets/Images/Presidents/Presidents18.png"),
        require("../../Assets/Images/Presidents/Presidents20.png"), 
    ]

    console.log(presidentNumber)



    const [headRemoved, setHeadRemoved] = useState(false);

    if(!headRemoved){
        return(
            <View style={{backgroundColor:'#89CFF0', flex:1, alignItems:"center"}}>
                <Pressable style={{flex:1}} onPress={()=>{setHeadRemoved(true)}}>
                    <Image style={{flex:1}}  resizeMode="contain" source={statuesWithHeads[presidentNumber]}></Image>
                </Pressable>
            </View>
        )
    }  else {
        return(
            <View style={{backgroundColor:'#89CFF0', flex:1, alignItems:"center"}}>
                <Pressable style={{flex:1}} onPress={()=>{setHeadRemoved(true)}}>
                    <Image style={{flex:1}}  resizeMode="contain" source={statuesWithoutHeads[presidentNumber]}></Image>
                </Pressable>
            </View>
        )
    }
    
}
export default StatueWall;

export const GW = () => {
    return(
        <StatueWall presidentNumber={1} />
    )
}
export const JA = () => {
    return(
        <StatueWall presidentNumber={2} />
    )
}
export const TJ = () => {
    return(
        <StatueWall presidentNumber={3} />
    )
}
export const JM = () => {
    return(
        <StatueWall presidentNumber={4} />
    )
}
export const JM2 = () => {
    return(
        <StatueWall presidentNumber={5} />
    )
}
export const JQA = () => {
    return(
        <StatueWall presidentNumber={6} />
    )
}
export const AJ = () => {
    return(
        <StatueWall presidentNumber={7} />
    )
}
export const MVB = () => {
    return(
        <StatueWall presidentNumber={8} />
    )
}
export const WHH = () => {
    return(
        <StatueWall presidentNumber={9} />
    )
}
export const JT = () => {
    return(
        <StatueWall presidentNumber={10} />
    )
}