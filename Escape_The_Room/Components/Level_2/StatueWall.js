import React, { useEffect, useState } from "react";
import { View, Image, Pressable, Text } from "react-native";
import { useValue } from "../ValueContext";


const StatueWall = ({presidentNumber, presidentName}) => {
    const {currentValue, setCurrentValue} = useValue();

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

    const [headRemoved, setHeadRemoved] = useState(false);

    if(!headRemoved){
        return(
            <View style={{backgroundColor:'#89CFF0', flex:1, alignItems:"center"}}>
                <Pressable style={{flex:1, alignItems:"center", justifyContent:"center"}} onPress={()=>{setHeadRemoved(true)}}>
                    <Image style={{width:256, height:512}} resizeMode="contain" source={statuesWithHeads[presidentNumber - 1]}>
                    </Image>
                    <Text adjustsFontSizeToFit={true} style={{backgroundColor:"goldenrod", borderRadius:5, padding:1, width:"30%", height:20, position:"absolute", top:375, textAlignVertical:"center", textAlign:"center", fontSize:10}}>
                        {presidentName}</Text>
                </Pressable>
            </View>
        )
    }  else {
        return(
            <View style={{backgroundColor:'#89CFF0', flex:1, alignItems:"center"}}>
                <Pressable style={{flex:1, alignItems:"center", justifyContent:"center"}} onPress={()=>{currentValue["currentCode"].push(presidentNumber); console.log(currentValue["currentCode"])}}>
                    <Image style={{width:256, height:512}} resizeMode="contain" source={statuesWithoutHeads[presidentNumber - 1]}>
                    </Image>
                    <Text adjustsFontSizeToFit={true} style={{backgroundColor:"goldenrod", borderRadius:5, padding:1, width:"30%", height:20, position:"absolute", top:375, textAlignVertical:"center", textAlign:"center", fontSize:10}}>
                        {presidentName}</Text>
                </Pressable>
            </View>
        )
    }
    
}
export default StatueWall;

export const GW = () => {
    return(
        <StatueWall presidentNumber={1} presidentName={"George Washington"} />
    )
}
export const JA = () => {
    return(
        <StatueWall presidentNumber={2} presidentName={"John Adams"}/>
    )
}
export const TJ = () => {
    return(
        <StatueWall presidentNumber={3} presidentName={"Thomas Jefferson"}/>
    )
}
export const JM = () => {
    return(
        <StatueWall presidentNumber={4} presidentName={"James Madison"}/>
    )
}
export const JM2 = () => {
    return(
        <StatueWall presidentNumber={5} presidentName={"James Monroe"}/>
    )
}
export const JQA = () => {
    return(
        <StatueWall presidentNumber={6} presidentName={"John Quincy Adams"}/>
    )
}
export const AJ = () => {
    return(
        <StatueWall presidentNumber={7} presidentName={"Andrew Jackson"}/>
    )
}
export const MVB = () => {
    return(
        <StatueWall presidentNumber={8} presidentName={"Martin Van Buren"}/>
    )
}
export const WHH = () => {
    return(
        <StatueWall presidentNumber={9} presidentName={"William Henry Harrison"}/>
    )
}
export const JT = () => {
    return(
        <StatueWall presidentNumber={10} presidentName={"John Tylor"}/>
    )
}