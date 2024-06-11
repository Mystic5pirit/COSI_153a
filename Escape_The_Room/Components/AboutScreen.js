import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This app is planned to be an escape room type of game.</Text>
            <Text style={styles.text}>It is planned to have different puzzles for each level.</Text>
            <Text style={styles.text}>The player needs to use each wall in the room to solve each puzzle.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89CFF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 30,
    },
})

export default About;