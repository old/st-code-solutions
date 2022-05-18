import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function PrimaryButton(props) {

  

    return (
        <TouchableOpacity style={styles.primaryButtonView(props?.isOrange) }> 
            <View style={styles.flexContainer}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    primaryButtonView: (buttonColor)  => { 
        return {
            backgroundColor:  buttonColor ? "#ff9529" : "#c0c0c0",
            borderWidth: 0.4,
            borderColor: "rgb(33, 33, 33)",
            height: '20%',
            width: '25%',
        }

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