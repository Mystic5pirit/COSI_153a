import React, {useState} from "react";
import { View, Pressable, Text, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThoughtBubble from "../../ThoughtBubble";
import ItemHolder from "../../ItemHolder";
import Bookshelf from "./Bookshelf";
import Box from "./Box";
import { useValue } from "../../ValueContext";


const Stack = createNativeStackNavigator();

const Wall = ({navigation}) => {
    
    return(
        <Stack.Navigator initialRouteName='BookshelfView'>
            <Stack.Screen name='BookshelfView' component={BookshelfView} options={{headerShown:false}}/>
            <Stack.Screen name='ShelfView' component={ShelfView}/>
            <Stack.Screen name='BoxView' component={BoxView}/>
        </Stack.Navigator>
    )
}

//Bookshelf
const BookshelfView = ({navigation}) => {
    
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#89CFF0'}}>
            <Bookshelf navigation={navigation}/>
            <ItemHolder/>
        </SafeAreaView>
    )
}

const ShelfView = ({navigation}) => {
    const [displayText, setDisplayText] = useState("");
    

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#884b12'}}>
            <ThoughtBubble displayText={displayText} />
            <Box requiredText="THE ARBORIST" hintText="WHAT IS BEHIND THE GREAT TREE" navigation={navigation} setDisplayText={setDisplayText} />
            <ItemHolder/>
        </SafeAreaView>
    )
}

const BoxView = ({navigation}) => {
    const {currentValue, setCurrentValue} = useValue();
    const [displayText, setDisplayText] = useState("");
    const [keyText, setKeyText] = useState("🔑")
    return(

        <SafeAreaView style={{flex:1}} >
            <ThoughtBubble displayText={displayText} />
            <View style={{flex:1, padding:20, backgroundColor:"#763900"}}>
                <View style={{flex:1,backgroundColor:'#a83b3b',flexDirection:"column", alignItems:"flex-end", justifyContent:"flex-start", borderColor:"black", borderWidth:5}}>
                    <View style={{flex:1}} />
                    <Pressable style={{flex:1}}
                        onPress={() => {
                            setCurrentValue({...currentValue, hasKey:true, items:"🔑"});
                            setDisplayText("You took the key");
                            setKeyText("");}}>
                        <Text style={{flex:1, fontSize:100}}>{keyText}</Text>
                    </Pressable>
                    <View style={{flex:1}} />
                </View>
            </View>
            <ItemHolder/>
        </SafeAreaView>
        
    )
}

export default Wall;