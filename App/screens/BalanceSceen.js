import React from "react";
import {Image, ImageBackground, StyleSheet, Text, Views } from "react-native";
function BalanceScreen(props){
    return(
        <ImageBackground style={Styles.background} source={require('../assets/background2.png')}></ImageBackground>

    );
}
const Styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
    },

})
export default BalanceScreen;