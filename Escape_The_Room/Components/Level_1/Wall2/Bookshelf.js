import React from "react";
import { View, Pressable } from "react-native";

const Bookshelf = ({navigation}) => {
    return(
        <View style={{flex:1}}>
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
export default Bookshelf;