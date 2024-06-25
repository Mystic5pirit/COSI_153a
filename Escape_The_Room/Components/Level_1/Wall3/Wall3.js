import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemHolder from "../../ItemHolder";
import ThoughtBubble from "../../ThoughtBubble";


const Wall = () => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName='WithPainting'>
            <Stack.Screen name='WithPainting' component={WithPainting} options={{headerShown:false}}/>
            <Stack.Screen name='WithoutPainting' component={WithoutPainting} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
    
}

const WithPainting = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex: 1, backgroundColor:'#89CFF0',flexDirection:"row",}}>
            <View style={{flex:2}}/>
            <View style={{flex:1,alignItems:"center"}}>
                <View style={{flex:1}}/>
                <Pressable style={{flex:1}} onPress={() => navigation.navigate("WithoutPainting")}>
                    <Image source={require("../../../Assets/Images/GreatTree.png")} resizeMode="contain" style={{flex:1}}></Image>
                </Pressable>
                <View style={{flex:1}}/>
            </View>
            <View style={{flex:2}}/>
            </View>
            <ItemHolder />
        </SafeAreaView>
    )
}

const WithoutPainting = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex: 1, backgroundColor:'#89CFF0',flexDirection:"row",}}>
                <View style={{flex:0.1}}/>
                <View style={{flex:1,alignItems:"center"}}>
                    <View style={{flex:1}}/>
                    <View style={{flex:1, padding:50}}>
                        <View style={{flex:1, backgroundColor:"#a86b32", justifyContent:"center", alignItems:"center"}}>
                            <View style={{flex:1}}/>
                            <Text adjustsFontSizeToFit={true} style={{flex:1, color:"#561900", fontSize:25}}>THE ARBORIST</Text>
                            <View style={{flex:1}}/>
                        </View>
                    </View>
                    <Image source={require("../../../Assets/Images/GreatTree.png")} resizeMode="contain" style={{flex:1, transform:[{rotate:"180deg"}]}}></Image>
                </View>            
                <View style={{flex:0.1}}/>
            </View>
            <ItemHolder />
        </SafeAreaView>
    )
}

export default Wall;