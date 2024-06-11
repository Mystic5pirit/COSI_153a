import React, {useState} from "react";
import { View, Pressable, Text, TextInput } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Wall = ({navigation}) => {
    return(
        <Stack.Navigator initialRouteName='DefaultView'>
            <Stack.Screen name='DefaultView' component={DefaultView} options={{headerShown:false}}/>
            <Stack.Screen name='ShelfView' component={ShelfView}/>
            <Stack.Screen name='BoxView' component={BoxView}/>
        </Stack.Navigator>
    )
}

//Bookshelf
const DefaultView = ({navigation}) => {
    
    return(
        <View style={{flex:1, backgroundColor:'#89CFF0'}}>
            <View style={{height:"15%"}} />
            <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
                <View style={{width:"20%", backgroundColor:"#a86b32", borderColor:"black", borderWidth:5, flexDirection:"column", alignItems:"center"}}>
                    <View style={{height:"4%"}}/>
                    <View style={{height:"20%", width:"80%", borderColor:"black", borderWidth:5, flexDirection:"row", alignItems:"flex-end"}}>
                        <View style={{flex:1, height:"80%", backgroundColor:"darkcyan", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:2, height:"50%", backgroundColor:"darkgoldenrod", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"65%", backgroundColor:"darkgreen", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"70%", backgroundColor:"darkmagenta", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:0.5, height:"90%", backgroundColor:"darkorchid", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"85%", backgroundColor:"midnightblue", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:0.75, height:"65%", backgroundColor:"forestgreen", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"55%", backgroundColor:"teal", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"95%", backgroundColor:"sienna", borderColor:"black", borderWidth:3}}></View>
                    </View>
                    <View style={{height:"4%"}}/>
                    <Pressable style={{height:"20%", width:"80%",}} onPress={() => navigation.navigate('ShelfView')}>
                        <View style={{flex:1, borderColor:"black", borderWidth:5, backgroundColor:"#884b12", flexDirection:"col", alignItems:"center", justifyContent:"flex-end" }}>
                            <View style={{height:"13%", width:"40%", backgroundColor:"#763900",  borderColor:"black", borderWidth:3}}></View>
                            <View style={{height:"37%", width:"40%", backgroundColor:"#763900",  borderColor:"black", borderWidth:3, alignItems:"center"}}>
                                <View style={{height:"50%", width:"40%", backgroundColor: "white", borderColor:"black", borderWidth:3, borderTopWidth:0}} />
                            </View>
                        </View>
                    </Pressable>
                    <View style={{height:"4%"}}/>
                    <View style={{height:"20%", width:"80%", borderColor:"black", borderWidth:5, flexDirection:"row", alignItems:"flex-end"}}>
                        <View style={{flex:2, height:"65%", backgroundColor:"sienna", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"75%", backgroundColor:"olive", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:0.5, height:"70%", backgroundColor:"maroon", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"95%", backgroundColor:"midnightblue", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"80%", backgroundColor:"darkorchid", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:0.5, height:"60%", backgroundColor:"darkgoldenrod", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"75%", backgroundColor:"darkgreen", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:0.75, height:"60%", backgroundColor:"darkmagenta", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"85%", backgroundColor:"teal", borderColor:"black", borderWidth:3}}></View>
                    </View>
                    <View style={{height:"4%"}}/>
                    <View style={{height:"20%", width:"80%", borderColor:"black", borderWidth:5, flexDirection:"row", alignItems:"flex-end"}}>
                        <View style={{flex:1.5, height:"85%", backgroundColor:"midnightblue", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"65%", backgroundColor:"darkgreen", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:0.3, height:"90%", backgroundColor:"darkorchid", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"70%", backgroundColor:"darkmagenta", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:.6, height:"50%", backgroundColor:"darkgoldenrod", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"95%", backgroundColor:"sienna", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1, height:"55%", backgroundColor:"navy", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:0.9, height:"80%", backgroundColor:"darkcyan", borderColor:"black", borderWidth:3}}></View>
                        <View style={{flex:1.5, height:"65%", backgroundColor:"olive", borderColor:"black", borderWidth:3}}></View>
                    </View>
                    <View style={{height:"4%"}}/>
                </View>
            </View>
        </View>
    )
}

const ShelfView = ({navigation}) => {
    const [displayText, setDisplayText] = useState("");
    const [enteredText, setEnteredText] = useState("");

    const openBox = () => {{
        if(enteredText == "THE ARBORIST"){
            navigation.navigate('BoxView');
            setDisplayText("");
        } else {
            setDisplayText("The Box Appears To Be Locked" + enteredText + "!");
        }
    }}

    return(
        <View style={{flex:1, backgroundColor:'#884b12'}}>
            <View style={{height:"2%"}}/>
            <View style={{height:"3%", alignItems:"center"}}>
                <View style={{width:"60%", backgroundColor:"white", borderRadius:5, alignItems:"center"}}>
                    <Text>{displayText}</Text>
                </View>
            </View>
            <View style={{flex:1, borderColor:"black", flexDirection:"col", alignItems:"center", justifyContent:"flex-end" }}>
                <Pressable style={{height:"50%", width:"40%"}} onPress={() => openBox()}>
                    <View style={{flex:1, backgroundColor:"#763900",  borderColor:"black", borderWidth:3}}>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                            <View style={{flex:100}}/>
                            <Text style={{flex:1, fontFamily:"roboto", color:"#561900", fontSize:25}}>WHAT IS BEHIND THE GREAT TREE</Text>
                            <View style={{flex:100}}/>
                        </View>
                    </View>
                    <View style={{flex:2, backgroundColor:"#763900",  borderColor:"black", borderWidth:3, alignItems:"center"}}>
                        <TextInput placeholder="_ _ _   _ _ _ _ _ _ _ _" 
                        onChangeText={text => {{setEnteredText(text);
                             if(text == "THE ARBORIST")
                             {setDisplayText("The Box Unlocked");
                             }
                            else {setDisplayText("The Box Appears To Be Locked");}
                        }}}
                        onEndEditing={() => openBox()}
                        style={{textAlign:"center", color:"darkgrey", fontSize:20,
                        height:"50%", width:"40%",
                        backgroundColor: "white", borderColor:"black", borderWidth:3, borderTopWidth:0}}></TextInput>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const BoxView = ({navigation}) => {
    const [displayText, setDisplayText] = useState("");
    return(

        <View style={{flex:1, padding:20, backgroundColor:"#763900"}}>
            <View style={{height:"2%"}}/>
            <View style={{height:"3%", alignItems:"center"}}>
                <View style={{width:"60%", backgroundColor:"white", borderRadius:5, alignItems:"center"}}>
                    <Text>{displayText}</Text>
                </View>
            </View>
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