import React, {useState} from "react";
import { View, Pressable, Text, TextInput } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThoughtBubble from "../../ThoughtBubble";
import Bookshelf from "./Bookshelf";
import Box from "./Box";


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
        <View style={{flex:1, backgroundColor:'#89CFF0'}}>
            <Bookshelf navigation={navigation}/>
        </View>
    )
}

const ShelfView = ({navigation}) => {
    const [displayText, setDisplayText] = useState("");
    

    return(
        <View style={{flex:1, backgroundColor:'#884b12'}}>
            <ThoughtBubble displayText={displayText} />
            <Box requiredText="THE ARBORIST" hintText="WHAT IS BEHIND THE GREAT TREE" navigation={navigation} setDisplayText={setDisplayText} />
        </View>
    )
}

const BoxView = ({navigation}) => {
    const [displayText, setDisplayText] = useState("");
    return(

        <View style={{flex:1, padding:20, backgroundColor:"#763900"}}>
            <ThoughtBubble displayText={displayText} />
            <View style={{flex:1,backgroundColor:'#a83b3b',flexDirection:"column", alignItems:"flex-end", justifyContent:"flex-start", borderColor:"black", borderWidth:5}}>
                <View style={{flex:100}} />
                <Pressable style={{flex:1}} onPress={() => {setDisplayText("It seems stuck, maybe one day you will be able to take it with you...")}}>
                    <Text style={{flex:1, fontSize:200}}>🔑 </Text>
                </Pressable>
                <View style={{flex:100}} />
            </View>
        </View>
        
    )
}

export default Wall;