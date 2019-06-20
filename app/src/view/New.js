import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-navigation';
import Colors from "../configs/ComStyle";

export default class New extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Colors.theme}}/>
                <Text style={styles.welcome}>New!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.themeBackground,
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },

});