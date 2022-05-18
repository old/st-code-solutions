import { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function PrimaryButton(props) {

    const add = () => {}
    const subtract = () => {}
    const multiply = () => {}
    const divide = () => {}
    const equal = () => {}
    const negative = () => {}
    const clear = () => {}

    return (
        <View style={styles.primaryButtonView}>
            <View style={styles.flexContainer}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    primaryButtonView: { // props.isOrange ? "FFA500" 
        backgroundColor:  "#c0c0c0",
        borderWidth: 0.3,
        borderColor: "rgb(33, 33, 33)",
        height: '20%',
        width: '25%',

    },
    buttonText: {
        fontSize: 40,

    },
    flexContainer: {
        
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})